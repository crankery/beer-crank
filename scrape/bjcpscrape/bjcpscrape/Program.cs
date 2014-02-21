namespace bjcpscrape
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Net;
    using HtmlAgilityPack;

    class Program
    {
        static void Main(string[] args)
        {
            // http://www.bjcp.org/2008styles/catdex.php
            // first: http://www.bjcp.org/2008styles/style01.php
            // last:  http://www.bjcp.org/2008styles/style23.php

            var styles = new List<Style>();

            var client = new WebClient();
            for (int i = 1; i <= 23; i++)
            {
                var url = string.Format("http://www.bjcp.org/2008styles/style{0:d2}.php", i);
                var html = client.DownloadString(url);

                styles.AddRange(GetStyles(html));
            }

            var o = string.Empty;
            foreach (var style in styles)
            {
                //function BeerStyle(name, ogmin, ogmax, fgmin, fgmax, abvmin, abvmax, ibumin, ibumax, srmmin, srmmax) {

                var s = style.name.Split('.');
                var category = s[0].Trim();
                var name = string.Join(".", s.Skip(1)).Trim();

                var x = string.Format("new BeerStyle(\"{0}\", \"{1}\", {2}),",
                    name,
                    category,
                    string.Join(", ", style.ogmin, style.ogmax, style.fgmin, style.fgmax, style.abvmin, style.abvmax, style.ibumin, style.ibumax, style.srmmin, style.srmmax));

                o += x + "\r\n";
            }
        }

        class Style
        {
            public string name { get; set; }
            public double ogmin { get; set; }
            public double ogmax{ get; set; }
            public double fgmin { get; set; }
            public double fgmax { get; set; }
            public double abvmin { get; set; }
            public double abvmax { get; set; }
            public double srmmin { get; set; }
            public double srmmax { get; set; }
            public double ibumin { get; set; }
            public double ibumax { get; set; }
        }

        private static IEnumerable<Style> GetStyles(string html)
        {
            var doc = new HtmlDocument();
            doc.LoadHtml(html);

            var headings = from h2 in doc.DocumentNode.Descendants("h2")
                           let text = h2.InnerText.Trim()
                           let isHeading = text.Contains("&mdash")
                           let clean = text.Replace("&mdash;", "\t")
                           select new { clean, isHeading, node = h2 };

            foreach (var heading in headings.Where(x => !x.isHeading))
            {
                var style = new Style { name = heading.clean };

                var result = new Style();

                var node = heading.node;
                while (node.Name != "table")
                {
                    node = node.NextSibling;
                }

                var values = from td in node.Descendants("td")
                             let text = td.InnerText.Trim()
                             let isHeading = !text.Contains("&ndash;")
                             let clean = text.Replace("&ndash;", "\t")
                             select new { txt = text, isHeading, clean };

                foreach (var data in values.Where(x => !x.isHeading))
                {
                    var split = data.clean.Split(':');
                    var key = split[0].Trim();
                    var rangeSplit = split[1].Split('\t');
                    var min = rangeSplit[0].Trim();
                    var max = rangeSplit[1].Trim();

                    switch (key)
                    {
                        case "OG":
                            style.ogmin = double.Parse(min);
                            style.ogmax = double.Parse(max);
                            break;
                        case "IBUs":
                            style.ibumin = double.Parse(min);
                            style.ibumax = double.Parse(max);
                            break;
                        case "FG":
                            style.fgmin = double.Parse(min);
                            style.fgmax = double.Parse(max);
                            break;
                        case "SRM":
                            style.srmmin = double.Parse(min);
                            style.srmmax = double.Parse(max);
                            break;
                        case "ABV":
                            style.abvmin = double.Parse(min.Trim('%'));
                            style.abvmax = double.Parse(max.Trim('%'));
                            break;
                    }
                }

                yield return style;
            }
        }
    }
}
