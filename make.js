// 背景
const selectBgImg = document.getElementById("select-bg-img");
const bgImg = document.getElementById("bg-img");
// アイコン
const selectIconImg = document.getElementById("select-icon-img");
const iconImg = document.getElementById("icon-img");
// 背景フィルタ
const filterColor = document.getElementById("filter-color");
const filterAlpha = document.getElementById("filter-alpha");
// カード
const CARD_TITLE_HEIGHT = 40;
const CARD_LINE_WIDTH = 6;
const cardColor = document.getElementById("card-color");
const cardAlpha = document.getElementById("card-alpha");
const cardValueColor = document.getElementById("card-value-color");
const cardBgColor = document.getElementById("card-bg-color");
const cardBgAlpha = document.getElementById("card-bg-alpha");
// 入力内容
const TITLE_NAME = "プレイヤー名";
const nameValue = document.getElementById("name-value");
const nameValueColor = document.getElementById("name-value-color");
const TITLE_ID = "プレイヤーID";
const idValue = document.getElementById("id-value");
const idValueColor = document.getElementById("id-value-color");
const TITLE_LV = "プレイヤーLv.";
const lvValue = document.getElementById("lv-value");
const lvValueColor = document.getElementById("lv-value-color");
const TITLE_ING_LV = "総合i-n-g Lv.";
const inglvValue = document.getElementById("inglv-value");
const inglvValueColor = document.getElementById("inglv-value-color");
const TITLE_RATE = "総合レート";
const rateValue = document.getElementById("rate-value");
const rateValueColor = document.getElementById("rate-value-color");
const TITLE_KNOW = "ナナシスを知ったきっかけ";
const knowValue = document.getElementById("know-value");
const knowValueColor = document.getElementById("know-value-color");
const TITLE_LIKE_CU = "好きなキャラ・ユニット";
const likeCU1Value = document.getElementById("like-cu1-value");
const likeCU1ValueColor = document.getElementById("like-cu1-value-color");
const likeCU2Value = document.getElementById("like-cu2-value");
const likeCU2ValueColor = document.getElementById("like-cu2-value-color");
const likeCU3Value = document.getElementById("like-cu3-value");
const likeCU3ValueColor = document.getElementById("like-cu3-value-color");
const likeCU4Value = document.getElementById("like-cu4-value");
const likeCU4ValueColor = document.getElementById("like-cu4-value-color");
const likeCU5Value = document.getElementById("like-cu5-value");
const likeCU5ValueColor = document.getElementById("like-cu5-value-color");
const likeCUArr = [
  [likeCU1Value, likeCU1ValueColor],
  [likeCU2Value, likeCU2ValueColor],
  [likeCU3Value, likeCU3ValueColor],
  [likeCU4Value, likeCU4ValueColor],
  [likeCU5Value, likeCU5ValueColor]
];
const TITLE_LIKE_S = "好きな曲";
const likeS1Value = document.getElementById("like-s1-value");
const likeS1ValueColor = document.getElementById("like-s1-value-color");
const likeS2Value = document.getElementById("like-s2-value");
const likeS2ValueColor = document.getElementById("like-s2-value-color");
const likeS3Value = document.getElementById("like-s3-value");
const likeS3ValueColor = document.getElementById("like-s3-value-color");
const likeS4Value = document.getElementById("like-s4-value");
const likeS4ValueColor = document.getElementById("like-s4-value-color");
const likeS5Value = document.getElementById("like-s5-value");
const likeS5ValueColor = document.getElementById("like-s5-value-color");
const likeSArr = [
  [likeS1Value, likeS1ValueColor],
  [likeS2Value, likeS2ValueColor],
  [likeS3Value, likeS3ValueColor],
  [likeS4Value, likeS4ValueColor],
  [likeS5Value, likeS5ValueColor]
];
const TITLE_LIKE_EVENT = "好きなイベント";
const likeEventValue = document.getElementById("like-event-value");
const likeEventValueColor = document.getElementById("like-event-value-color");
const TITLE_LIKE_EP = "好きなエピソード";
const likeEpValue = document.getElementById("like-ep-value");
const likeEpValueColor = document.getElementById("like-ep-value-color");
const TITLE_COMMENT = "コメント";
const comment1Value = document.getElementById("comment1-value");
const comment2Value = document.getElementById("comment2-value");
const comment3Value = document.getElementById("comment3-value");
const commentValueColor = document.getElementById("comment-value-color");
const commentArr = [
  [comment1Value, commentValueColor],
  [comment2Value, commentValueColor],
  [comment3Value, commentValueColor]
];

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvasImg = document.getElementById("canvas-img");

// canvas描画サイズ
const cvw = 640;
const cvh = 960;
// canvas画像実サイズ
const ciw = 960;
const cih = 1440;

let bgImgFlag = false;
let iconImgFlag = false;

canvas.width = ciw;
canvas.height = cih;

window.addEventListener("load", function() {
  ctx.textBaseline = "middle";
  ctx.lineWidth = CARD_LINE_WIDTH;
  ctx.font = "bold 70px 'Yu Gothic UI', 'Meiryo UI', sans-serif";
  // 初期描画
  ctx.fillStyle = "#ffffff";
  const firstText = "ここに画像が表示されます";
  let textWidth = ctx.measureText(firstText).width;
  ctx.fillText(firstText, (ciw - textWidth) / 2, 650);
});

function createCanvas() {
  canvas.style.backgroundColor = "555555";
  loadImg();
}

// -----------------------------------------------------------------------------
// 画像ファイル確認
selectBgImg.addEventListener("change",  function() {
    checkImg(selectBgImg, bgImgFlag, bgImg)
}, false);
selectIconImg.addEventListener("change", function() {
    checkImg(selectIconImg, iconImgFlag, iconImg);
}, false);
function checkImg(selectImg, imgFlag, img) {
  if (selectImg.files[0] != null) {
    var fileData = selectImg.files[0];
    if (fileData.type.match("image.*")) {
      var reader = new FileReader();
      reader.onload = function(event) {
        img.src = event.target.result;
        img.style.visibility = "visible";
        img.style.height = "120px";
        imgFlag = true;
      }
      reader.readAsDataURL(fileData);
    }
  }
}

// セクション毎にトグルを設定
const secIdArr = [
  ["sec-name-1", "content-1"],
  ["sec-name-2", "content-2"],
  ["sec-name-3", "content-3"]
];
for (let i = 0; i < secIdArr.length; i++) {
  document.getElementById(secIdArr[i][0]).addEventListener("click", function() {
      document.getElementById(secIdArr[i][1]).classList.toggle('hidden');
      document.getElementById(secIdArr[i][0]).classList.toggle('hidden');
  }, false);
}

// レンジの%を表示
const rangeIdArr = [
  ["filter-alpha", "range_value_1"],
  ["card-alpha", "range_value_2"],
  ["card-bg-alpha", "range_value_3"]
];
for (let i = 0; i < rangeIdArr.length; i++) {
  const inputRange = document.getElementById(rangeIdArr[i][0]);
  inputRange.addEventListener("input", function() {
      document.getElementById(rangeIdArr[i][1]).innerHTML = inputRange.value + "%";
  }, false);
}

// -----------------------------------------------------------------------------
function drawCanvas() {
  canvas.style.visibility = "hidden";
  ctx.clearRect(0, 0, ciw, cih);
  ctx.globalAlpha = 1.0;

  if (bgImg.src != "") {
    drawBgImg().then(function() {
      drawContents();
    });
  } else {
    drawContents();
  }
}

function drawContents() {
  drawFilter();
  drawTitle();

  drawCard(30, 160, 450, 80);
  drawText(30, 160, 450, 80, TITLE_NAME, [[nameValue, nameValueColor]], 48);
  drawCard(510, 160, 200, 80);
  drawText(510, 160, 200, 80, TITLE_ID, [[idValue, idValueColor]], 40);

  drawCard(30, 310, 280, 70);
  drawText(30, 310, 280, 70, TITLE_LV, [[lvValue, lvValueColor]], 45);
  drawCard(340, 310, 280, 70);
  drawText(340, 310, 280, 70, TITLE_ING_LV, [[inglvValue, inglvValueColor]], 45);
  drawCard(650, 310, 280, 70);
  drawText(650, 310, 280, 70, TITLE_RATE, [[rateValue, rateValueColor]], 45);

  drawCard(30, 450, 900, 70);
  drawText(30, 450, 900, 70, TITLE_KNOW, [[knowValue, knowValueColor]], 38);

  drawCard(30, 590, 435, 250);
  drawText(30, 590, 435, 250, TITLE_LIKE_CU, likeCUArr, 32);
  drawCard(495, 590, 435, 250);
  drawText(495, 590, 435, 250, TITLE_LIKE_S, likeSArr, 32);

  drawCard(30, 910, 900, 70);
  drawText(30, 910, 900, 70, TITLE_LIKE_EVENT, [[likeEventValue, likeEventValueColor]], 38);
  drawCard(30, 1050, 900, 70);
  drawText(30, 1050, 900, 70, TITLE_LIKE_EP, [[likeEpValue, likeEpValueColor]], 38);

  drawCard(30, 1190, 900, 170);
  drawText(30, 1190, 900, 170, TITLE_COMMENT, commentArr, 36);

  drawDate();

  if (iconImg.src != "") {
    drawIcon(736, 46, 200, 200);
  }

  canvas.style.backgroundColor = "#ffffff00";
  canvasImg.src = canvas.toDataURL();
  canvasImg.style.visibility = "visible";
}

function drawBgImg() {
  return new Promise(function(resolve, reject) {
   let iw, ih;
   let pw = 0, ph = 0;

   if (bgImg.naturalWidth/2*3 < bgImg.naturalHeight) {
     iw = ciw;
     ih = ciw / (bgImg.naturalWidth / bgImg.naturalHeight);
     // 縦座標を調節して中央揃え
     ph = (ih - cih) / 2;
   } else {
     ih = cih;
     iw = cih / (bgImg.naturalHeight / bgImg.naturalWidth);
     // 横座標を調節して中央揃え
     pw = (iw - ciw) / 2;
   }

   ctx.drawImage(bgImg, -pw, -ph, iw, ih);
   resolve();
 });
}

function drawFilter() {
  ctx.fillStyle = "" + filterColor.value;
  ctx.globalAlpha = 1 - filterAlpha.value / 100;
  ctx.fillRect(0, 0, ciw, cih);
  ctx.globalAlpha = 1.0;
}

function drawTitle() {
  // タイトル枠
  ctx.fillStyle = "" + cardColor.value;
  ctx.globalAlpha = 1 - cardAlpha.value / 100;
  ctx.font = "bold 50px 'Yu Gothic UI', 'Meiryo UI', sans-serif";
  ctx.beginPath();
  ctx.moveTo(0, 20);
  ctx.lineTo(440, 20);
  ctx.lineTo(480, 90);
  ctx.lineTo(0, 90);
  ctx.closePath();
  ctx.fill();
  // タイトル文字
  ctx.fillStyle = "" + cardValueColor.value;
  ctx.globalAlpha = 1;
  ctx.font = "bold 45px 'Yu Gothic UI', 'Meiryo UI', sans-serif";
  ctx.fillText("ナナシス履歴書", 30, 56);
  // 下線
  ctx.lineWidth = CARD_LINE_WIDTH - 2;
  ctx.strokeStyle = "" + cardValueColor.value;
  ctx.beginPath();
  ctx.moveTo(0, 82);
  ctx.lineTo(460, 82);
  ctx.closePath();
  ctx.stroke();

  ctx.lineWidth = CARD_LINE_WIDTH;
}

function drawIcon(wp, hp, w, h) {
  ctx.fillStyle = "" + cardColor.value;
  ctx.globalAlpha = 1 - cardAlpha.value / 100;
  ctx.beginPath();
  ctx.moveTo(wp, hp);
  ctx.lineTo(wp + w, hp);
  ctx.lineTo(wp + w , hp + h);
  ctx.lineTo(wp, hp + h);
  ctx.closePath();
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.drawImage(iconImg, wp + 8, hp + 8, w - 16, h - 16);
}

function drawCard(wp, hp, w, h) {
  // カード背景描画
  ctx.fillStyle = "" + cardBgColor.value;
  ctx.globalAlpha = 1 - cardBgAlpha.value / 100;
  ctx.fillRect(wp, hp, w, h);
  // カードタイトル欄描画
  ctx.fillStyle = "" + cardColor.value;
  ctx.globalAlpha = 1 - cardAlpha.value / 100;
  ctx.beginPath();
  ctx.moveTo(wp - ctx.lineWidth, hp - CARD_TITLE_HEIGHT);
  ctx.lineTo(wp + w + ctx.lineWidth - CARD_TITLE_HEIGHT, hp - CARD_TITLE_HEIGHT);
  ctx.lineTo(wp + w + ctx.lineWidth, hp);
  ctx.lineTo(wp - ctx.lineWidth, hp);
  ctx.closePath();
  ctx.fill();
  // カード枠描画
  ctx.strokeStyle = "" + cardColor.value;
  ctx.beginPath();
  ctx.moveTo(wp - (ctx.lineWidth / 2), hp);
  ctx.lineTo(wp - (ctx.lineWidth / 2), hp + h + (ctx.lineWidth / 2));
  ctx.lineTo(wp + w + (ctx.lineWidth / 2), hp + h + (ctx.lineWidth / 2));
  ctx.lineTo(wp + w + (ctx.lineWidth / 2), hp);
  ctx.stroke();

  ctx.globalAlpha = 1;
}

function drawText(wp, hp, width, height, titleText, contentsValueArr, contentsFontSize) {
  // カードタイトル描画
  ctx.fillStyle = "" + cardValueColor.value;
  ctx.font = "bold 25px 'Yu Gothic UI', 'Meiryo UI', sans-serif";
  ctx.fillText(titleText, wp + 10, hp - 18, width - 50);
  // カード入力内容描画
  for (let i = 0; i < contentsValueArr.length; i++) {
    ctx.fillStyle = "" + contentsValueArr[i][1].value;
    ctx.font = "bold " + contentsFontSize + "px 'Yu Gothic UI', 'Meiryo UI', sans-serif";
    if (contentsValueArr.length == 1) {
      ctx.fillText(contentsValueArr[i][0].value, wp + 10, hp + height / 2, width - 20);
    } else {
      ctx.fillText(contentsValueArr[i][0].value, wp + 10, hp + contentsFontSize / 2 + i * contentsFontSize + (i + 1) * 14, width - 20);
    }
  }
}

function drawDate() {
  var date = new Date();
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  var d = date.getDate();
  ctx.fillStyle = "" + cardValueColor.value;
  ctx.font = "bold 22px 'Yu Gothic UI', 'Meiryo UI', sans-serif";
  ctx.fillText("作成日：" + y + "/" + m + "/" + d, 30, cih - 28);
}
