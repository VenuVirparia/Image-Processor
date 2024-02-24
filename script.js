function toggleCompressionOptions() {
  var compressionOptions = document.getElementById("compressionOptions");
  compressionOptions.style.display = document.getElementById("compressCheckbox").checked? "block" : "none";
}

function toggleConversionOptions() {
  var formatSelect = document.getElementById("formatSelect");
  formatSelect.disabled = !document.getElementById("convertCheckbox").checked;
}

function processImage() {
  var fileInput = document.getElementById("imageInput");

  var compressCheckbox = document.getElementById("compressCheckbox");
  var convertCheckbox = document.getElementById("convertCheckbox");

  var startButton = document.getElementById("startButton");
  var downloadButton = document.getElementById("downloadButton");

  var imageFile = fileInput.files[0];
  var inputSize = imageFile.size / 1000;
  //console.log("Original size: " + inputSize);
  var compressionQuality = 100; // Default compression quality
  var expectedSize = inputSize;
  
//compression and conversion logic here
}
