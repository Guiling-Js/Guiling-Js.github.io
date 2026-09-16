(function () {
  // ★ 歌单配置：cover 可换成每首歌自己的封面图路径，没有就统一用一张
  var playlist = [
    { title: '一程山路', artist: '毛不易', src: '/music/一程山路 - 毛不易.mp3', cover: 'https://cdn.jsdelivr.net/gh/guiling-js/Guiling-Js.github.io@main/source/img/music.png' },
    { title: 'Merry Christmas Mr.Lawrence(劳伦斯先生圣诞快乐)', artist: '坂本龍一', src: '/music/Merry Christmas Mr.Lawrence (劳伦斯先生圣诞快乐) - 坂本龍一.mp3', cover: 'https://cdn.jsdelivr.net/gh/guiling-js/Guiling-Js.github.io@main/source/img/music2.png' }
  ];

  var idx = 0;

  var html =
    '<div id="vinyl-player">' +
      '<img class="vinyl-cover" src="' + playlist[0].cover + '" alt="cover">' +
      '<div class="vinyl-info">' +
        '<div class="vinyl-title"></div>' +
        '<div class="vinyl-artist"></div>' +
      '</div>' +
      '<button class="vinyl-btn vinyl-btn-play" id="vp-toggle">▶</button>' +
      '<button class="vinyl-btn vinyl-btn-next" id="vp-next">⏭</button>' +
      '<audio id="vp-audio" preload="none"></audio>' +
    '</div>';

  var box = document.createElement('div');
  box.innerHTML = html;
  document.body.appendChild(box);

  var root = document.getElementById('vinyl-player');
  var audio = document.getElementById('vp-audio');
  var cover = root.querySelector('.vinyl-cover');
  var title = root.querySelector('.vinyl-title');
  var artist = root.querySelector('.vinyl-artist');
  var toggle = document.getElementById('vp-toggle');

  function load(i, autoplay) {
    idx = (i + playlist.length) % playlist.length;
    audio.src = playlist[idx].src;
    title.innerHTML = '<span>' + playlist[idx].title + '</span>';

// 歌名超出容器宽度才启动滚动动画（短歌名保持静止）
var span = title.querySelector('span');
requestAnimationFrame(function () {
  span.classList.remove('vp-scrolling');   // 先清除上一次的滚动状态
  if (span.scrollWidth > title.clientWidth) {
    span.classList.add('vp-scrolling');
  }
});

    artist.textContent = playlist[idx].artist;
    cover.src = playlist[idx].cover;
    if (autoplay) audio.play();
  }

  function setPlaying(p) {
    root.classList.toggle('playing', p);
    toggle.textContent = p ? '⏸' : '▶';
  }

  toggle.onclick = function () {
    if (audio.paused) audio.play(); else audio.pause();
  };
  document.getElementById('vp-next').onclick = function () { load(idx + 1, true); };

  cover.onclick = function () { toggle.click(); };

  audio.onplay  = function () { setPlaying(true); };
  audio.onpause = function () { setPlaying(false); };
  audio.onended = function () { load(idx + 1, true); };

  load(0, false);
})();
