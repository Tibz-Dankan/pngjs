var fs = require("fs"),
  PNG = require("pngjs").PNG;

// fs.createReadStream("in.png")
//   .pipe(
//     new PNG({
//       filterType: 4,
//     })
//   )
//   .on("parsed", function () {
//     for (var y = 0; y < this.height; y++) {
//       for (var x = 0; x < this.width; x++) {
//         var idx = (this.width * y + x) << 2;

//         // invert color
//         this.data[idx] = 255 - this.data[idx];
//         this.data[idx + 1] = 255 - this.data[idx + 1];
//         this.data[idx + 2] = 255 - this.data[idx + 2];

//         // and reduce opacity
//         this.data[idx + 3] = this.data[idx + 3] >> 1;
//       }
//     }

//     this.pack().pipe(fs.createWriteStream("out.png"));
//   });

const img1 = PNG.sync.read(fs.readFileSync("in.png"));
const img2 = PNG.sync.read(fs.readFileSync("out.png"));
const { width, height } = img1;
const diff = new PNG({ width, height });

console.log("img1", img1);
console.log("img2", img2);

// pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.1 });

// fs.writeFileSync("diff.png", PNG.sync.write(diff));
