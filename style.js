// function loop(timestamp){
    // let items = document.getElementsByClassName('item');
    // let item_num = items.length;
    // let rad = (2/item_num)*Math.PI;
    // let item_width = items[0].clientWidth;
    // let circle_r = (document.getElementById('circle-box').clientWidth - item_width) / 2;
    // for (let i = 0; i < item_num; i++){
    //     let x = Math.cos(rad * i) * circle_r + circle_r;
    //     let y = -Math.sin(rad * i) * circle_r + circle_r;
    //     items[i].style.left = x + "px";
    //     items[i].style.top = y + "px";
    // }
// }

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