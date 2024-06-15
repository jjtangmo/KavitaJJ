using API.Data.Metadata;
using API.Entities;
using API.Entities.Enums;
using API.Extensions;
using API.Helpers;
using API.Helpers.Builders;
using API.Services;
using API.Services.Tasks.Scanner;
using API.Services.Tasks.Scanner.Parser;

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

using VersOne.Epub;

namespace API;
#nullable enable
public static class MeModFunction {

    static string[] TitleRejects = ["-",""];


    public static ComicInfo? ComicInfoRejectTitle(ComicInfo? info)
    {
        if(TitleRejects.Contains(info?.Title))
            return null;
        return info;
    }

    public static ParserInfo? ParserInfoRejectTitle(ParserInfo parserInfo, string filePath)
    {
        if(TitleRejects.Contains(parserInfo.Title)) {
            parserInfo.Title = Path.GetFileNameWithoutExtension(filePath);
            if(TitleRejects.Contains(parserInfo.Series))
                parserInfo.Series = parserInfo.Title;
        }
        return parserInfo;
    }

  

    public static async Task MangaSeriesGetMetaDataFromComicInfoXML_Pdf(Series series, Library library, ITagManagerService _tagManagerService)
    {
        string[] libPaths = library.Folders.Select(p => p.Path).ToArray();
        //string folderPath = series.FolderPath!;
        //foreach(var libPath in libPaths) {
        //    folderPath = folderPath.Replace(libPath, "");
        //    folderPath = folderPath.Replace($"{libPath}/".Replace("/","\\"), "");
        //    folderPath = folderPath.Replace($"{libPath}\\".Replace("\\", "/"), "");
        //}
        string comicInfoPath = $"{series.FolderPath}/ComicInfo.xml";
        //series.Name = folderPath;
        //series.OriginalName = folderPath;
        //series.SortName = folderPath;
        //series.LocalizedName = folderPath;
        //series.NormalizedName = folderPath.ToNormalized();
        if(!File.Exists(comicInfoPath))
            return;
        ComicInfo? comicInfo = GetComicInfoFromFile(comicInfoPath);
        if(comicInfo == null)
            return;        
        var tags = TagHelper.GetTagValues(comicInfo.Tags);
        TagHelper.KeepOnlySameTagBetweenLists(series.Metadata.Tags, tags.Select(t => new TagBuilder(t).Build()).ToList());
        foreach(var tag in tags) {
            var t = await _tagManagerService.GetTag(tag);
            if(t == null)
                continue;
            series.Metadata.Tags.Add(t);
        }
        if(!series.Metadata.GenresLocked) {
            var genres = TagHelper.GetTagValues(comicInfo.Genre);
            GenreHelper.KeepOnlySameGenreBetweenLists(series.Metadata.Genres, genres.Select(g => new GenreBuilder(g).Build()).ToList());
            foreach(var genre in genres) {
                var g = await _tagManagerService.GetGenre(genre);
                if(g == null)
                    continue;
                series.Metadata.Genres.Add(g);
            }
        }
        series.Metadata.Summary = comicInfo.Summary;
        if(!series.Metadata.PublicationStatusLocked) {
            string statusnormalized = comicInfo.Status.ToNormalized();
            series.Metadata.PublicationStatus = statusnormalized switch {
                "ongoing" => PublicationStatus.OnGoing,
                "hiatus" => PublicationStatus.Hiatus,
                "หยุดพัก" => PublicationStatus.Hiatus,
                "complete" => PublicationStatus.Completed,
                "completed" => PublicationStatus.Completed,
                "ครบ" => PublicationStatus.Completed,
                "end" => PublicationStatus.Ended,
                "ended" => PublicationStatus.Ended,
                "จบ" => PublicationStatus.Ended,
                "จบแล้ว" => PublicationStatus.Ended,
                "cancel" => PublicationStatus.Cancelled,
                "cancelled" => PublicationStatus.Cancelled,
                "ยกเลิก" => PublicationStatus.Cancelled,
                _ => PublicationStatus.OnGoing
            };
        }


    }

    public static ComicInfo? GetComicInfoFromFile(string path)
    {
        using FileStream stream = new FileStream(path, FileMode.Open, FileAccess.Read);
        var info = ArchiveService.Deserialize(stream);
        return info;
    }

    internal static string EpubRejectTitleAndReplaceByFileName(string epubBookTitle, string filePath)
    {
        if(TitleRejects.Contains(epubBookTitle)) {
            return Path.GetFileNameWithoutExtension(filePath);
        }
        return epubBookTitle;
    }

    internal static string UseSeriesByFolder(ParserInfo info, string rootPath, string libraryRoot)
    {
        string series = rootPath.Replace($"{libraryRoot}\\","");
        return series;
    }

    internal static string UseTitleByFileName(string filePath)
    {
        string title = Path.GetFileNameWithoutExtension(filePath);
        return title;
    }

    internal static string GetVolumeByFileName(string filePath, LibraryType type)
    {
        string title = UseTitleByFileName(filePath);
        var hasVolumeInTitle = !Parser.ParseVolume(title, type).Equals(Parser.LooseLeafVolume);
        if(hasVolumeInTitle) {
            string volume = Parser.ParseVolume(title, type);
            return volume;
        }
        return "-100000";
    }

    public static void GetMetaDataFromComicInfoXML_Epub(ParserInfo parserInfo, string rootPath, string libraryRoot, string filePath, LibraryType type)
    {
        string comicInofPath = Path.Combine(rootPath,"ComicInfo.xml");
        if(!File.Exists(comicInofPath))
            return;
        var comicInfo = GetComicInfoFromFile(comicInofPath);
        if(comicInfo is null)
            comicInfo = new ComicInfo();
        if(parserInfo.ComicInfo is null)
            return;
        if(comicInfo.Series is not null && comicInfo.Series.Length > 0) {
            parserInfo.Series = comicInfo.Series;
            parserInfo.ComicInfo.Series = comicInfo.Series;
        }
        else {
            //when not found <Series>
            parserInfo.Series = MeModFunction.UseSeriesByFolder(parserInfo, rootPath, libraryRoot);
            parserInfo.ComicInfo.Series = parserInfo.Series;
        }
        string volume_fromfilename = GetVolumeByFileName(filePath, type);
        if(comicInfo.Title is not null && comicInfo.Title.Length > 0) {
            parserInfo.Title = $"{comicInfo.Title}";
            parserInfo.ComicInfo.Title = $"{comicInfo.Title}";
            if(volume_fromfilename.Length > 0 && volume_fromfilename != "-100000") {
                parserInfo.Title = $"{parserInfo.Title} เล่ม {volume_fromfilename}";
                parserInfo.ComicInfo.Title = $"{parserInfo.Title}";
                parserInfo.ComicInfo.Volume = volume_fromfilename;
                parserInfo.Volumes = volume_fromfilename;
            }
            else {
                parserInfo.Title = MeModFunction.UseTitleByFileName(filePath);
                parserInfo.ComicInfo.Title = parserInfo.Title;
            }
        }
        else {
            //when not found <Title>
            parserInfo.Title = MeModFunction.UseTitleByFileName(filePath);
            parserInfo.ComicInfo.Title = parserInfo.Title;
            if(volume_fromfilename.Length > 0 && volume_fromfilename != "-100000") {
                parserInfo.ComicInfo.Volume = volume_fromfilename;
                parserInfo.Volumes = volume_fromfilename;
            }
        }
        if(comicInfo.Summary is not null && comicInfo.Summary.Length > 0) {
            parserInfo.ComicInfo.Summary = comicInfo.Summary;
        }
        if(comicInfo.Status is not null && comicInfo.Status.Length > 0) {
            parserInfo.ComicInfo.Status = comicInfo.Status;
        }
        if(comicInfo.Tags is not null && comicInfo.Tags.Length > 0) {
            parserInfo.ComicInfo.Tags = comicInfo.Tags;
        }
        if(comicInfo.Genre is not null && comicInfo.Genre.Length > 0) {
            parserInfo.ComicInfo.Genre = comicInfo.Genre;
        }
    }
    internal static bool NoUpdateCheck => true;

    //text for search
    //MeModFunction.Preserve Original
    //search above word for view original code
}


file static class ArrayExtensions {
    public static void ReplaceAll<T>(this T[] items, T oldValue, T newValue)
    {
        items.ReplaceAll(oldValue, newValue, EqualityComparer<T>.Default);
    }

    public static void ReplaceAll<T>(this T[] items, T oldValue, T newValue, IEqualityComparer<T> comparer)
    {
        for(int index = 0; index < items.Length; index++)
            if(comparer.Equals(items[index], oldValue))
                items[index] = newValue;
    }
}
