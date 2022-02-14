const titles = [
    "テニス",
    "Leaders",
    "猫",
    "読書"
]

const texts = [
    "中学、高校でテニス部に所属していました。今でもコートを借りて友人とテニスをしています。",
    "Leadersではtodoリストとゲームフィケーションを組み合わせたWebアプリを作成しました。<br>が、ログインできなくなっていました。そのうち直します。",
    "悲しいことに飼ってはいません。しかし、大好きです。将来必ず猫を飼うと心に決めています。",
    "小学生の頃に読んだ精霊の守り人シリーズが一番印象に残っています。<br>フリージャンルで読みますが、特に好きなジャンルはファンタジー小説です。"
]


function print_text(idx) {
    let title = document.getElementById('galary-title');
    title.innerHTML = titles[idx];
    let item = document.getElementById('galary-text')
    item.innerHTML = texts[idx];
}

let preX;
let preY;

//マウスストーカー用のdivを取得
const stalker = document.getElementById('stalker'); 

//上記のdivタグをマウスに追従させる処理
document.addEventListener('mousemove', function (e) {
    stalker.style.transformOrigin = preX + 'px ' + preY + 'px'; 
    stalker.style.transform = 'rotate(' + Math.atan((e.clientY - preY)/(e.clientX - preX)) + 'rad) translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    preX = e.clientX;
    preY = e.clientY;
});