function initViz() {
  // JS object that points at empty div in the html
  var placeholderDiv = document.getElementById("tableauViz");
  // URL of the viz to be embedded
  var url = "https://public.tableau.com/views/StockPricewithWDC-WIP/AppleStock?:embed=y&:display_count=yes";
  // An object that contains options specifying how to embed the viz
  var options = {
    width: '900px',
    height: '400px',
    hideTabs: true,
    hideToolbar: true,
  };
  viz = new tableau.Viz(placeholderDiv, url, options);
}
