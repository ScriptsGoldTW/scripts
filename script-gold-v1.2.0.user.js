// ==UserScript==
// @name         Script Gold
// @version      1.2.0
// @author       Gold
// @description  Scripts automatizados para Tribal Wars
// @include      http*://*.tribalwars*
// @icon         https://i.ibb.co/JW2mP2zp/ac1b1d3a-cef6-4c30-8c60-f9c5f997ed5c.webp
// @grant        GM_xmlhttpRequest
// @connect      scriptgold.com.br
// ==/UserScript==

function _0x3f83(_0x38c136, _0x3add6b) {
  const _0x197d17 = _0x197d();
  return (
    (_0x3f83 = function (_0x3f839a, _0x39a59c) {
      _0x3f839a = _0x3f839a - 0x66;
      let _0x23b135 = _0x197d17[_0x3f839a];
      return _0x23b135;
    }),
    _0x3f83(_0x38c136, _0x3add6b)
  );
}
function _0x197d() {
  const _0x345764 = [
    'name',
    '[Gold\x20Loader]\x20Erro\x20ao\x20carregar\x20o\x20menu:',
    '[Gold\x20Loader]\x20Falha\x20na\x20autenticação:',
    'player',
    'parse',
    'https://scriptgold.com.br',
    '20RxKUzW',
    'status',
    'error',
    'POST',
    '1297659kIBwkb',
    '611715MuOzcA',
    'head',
    '/api/scripts/encoded/menu.user.js',
    '[Gold\x20Loader]\x20Erro\x20ao\x20processar\x20autenticação:',
    '2304484zzpDqR',
    '1910EqDfbz',
    'href',
    '7ulQRZj',
    '/api/autenticar',
    'about:blank',
    'application/json',
    '2676AXkqyn',
    'responseText',
    'setItem',
    'GET',
    'Bearer\x20',
    'textContent',
    'Console\x20detectado!\x20A\x20execução\x20será\x20encerrada.',
    'getGameData',
    '[Gold\x20Loader]\x20Falha\x20ao\x20carregar\x20o\x20menu:',
    '20970fLCWKH',
    '1766JjnTxg',
    'getItem',
    '9889983AqfQCS',
    'createElement',
    'script',
    '7190184INWiMB',
    'gold_token',
  ];
  _0x197d = function () {
    return _0x345764;
  };
  return _0x197d();
}
(function (_0x56721c, _0x4541a2) {
  const _0x596a0b = _0x3f83,
    _0x161b10 = _0x56721c();
  while (!![]) {
    try {
      const _0x5e7183 =
        parseInt(_0x596a0b(0x6e)) / 0x1 +
        (parseInt(_0x596a0b(0x83)) / 0x2) * (parseInt(_0x596a0b(0x79)) / 0x3) +
        parseInt(_0x596a0b(0x72)) / 0x4 +
        (parseInt(_0x596a0b(0x73)) / 0x5) * (-parseInt(_0x596a0b(0x82)) / 0x6) +
        (-parseInt(_0x596a0b(0x75)) / 0x7) *
          (-parseInt(_0x596a0b(0x88)) / 0x8) +
        -parseInt(_0x596a0b(0x85)) / 0x9 +
        (parseInt(_0x596a0b(0x69)) / 0xa) * (parseInt(_0x596a0b(0x6d)) / 0xb);
      if (_0x5e7183 === _0x4541a2) break;
      else _0x161b10['push'](_0x161b10['shift']());
    } catch (_0x76318f) {
      _0x161b10['push'](_0x161b10['shift']());
    }
  }
})(_0x197d, 0xa516e),
  (function () {
    'use strict';
    const _0x300508 = _0x3f83;
    const _0x5c70a8 = _0x300508(0x68),
      _0x878378 = _0x5c70a8 + _0x300508(0x70);
    function _0x203cb4() {
      setInterval(() => {
        const _0x386296 = _0x3f83,
          _0x431a66 = new Date();
        debugger;
        const _0xa2f8e2 = new Date();
        _0xa2f8e2 - _0x431a66 > 0x64 &&
          (alert(_0x386296(0x7f)),
          (window['location'][_0x386296(0x74)] = _0x386296(0x77)));
      }, 0x3e8);
    }
    function _0x54cbe4(_0x227dda, _0x136bc3) {
      const _0x2e8c50 = _0x300508;
      try {
        const _0x192232 = localStorage[_0x2e8c50(0x84)](_0x227dda);
        return _0x192232 !== null
          ? JSON[_0x2e8c50(0x67)](_0x192232)
          : _0x136bc3;
      } catch {
        return _0x136bc3;
      }
    }
    function _0x560bef(_0xe368c0, _0x487664) {
      const _0x5e7625 = _0x300508;
      try {
        localStorage[_0x5e7625(0x7b)](_0xe368c0, _0x487664);
      } catch {}
    }
    function _0x300ba7() {
      const _0x40a8c8 = _0x300508,
        _0x2715b6 =
          TribalWars[_0x40a8c8(0x80)]()[_0x40a8c8(0x66)][_0x40a8c8(0x8a)];
      GM_xmlhttpRequest({
        method: _0x40a8c8(0x6c),
        url: _0x5c70a8 + _0x40a8c8(0x76),
        data: JSON['stringify']({ nome: _0x2715b6 }),
        headers: { 'Content-Type': _0x40a8c8(0x78) },
        onload: function (_0x525221) {
          const _0x5b061a = _0x40a8c8;
          if (
            _0x525221[_0x5b061a(0x6a)] === 0xc8 ||
            _0x525221[_0x5b061a(0x6a)] === 0xc9
          )
            try {
              const { token: _0x34b18b } = JSON[_0x5b061a(0x67)](
                _0x525221[_0x5b061a(0x7a)],
              );
              _0x560bef(_0x5b061a(0x89), _0x34b18b), _0x143244(_0x34b18b);
            } catch (_0x50b357) {
              console[_0x5b061a(0x6b)](_0x5b061a(0x71), _0x50b357);
            }
          else console[_0x5b061a(0x6b)](_0x5b061a(0x8c), _0x525221['status']);
        },
        onerror: function (_0x47b2f7) {
          const _0x1a5af3 = _0x40a8c8;
          console[_0x1a5af3(0x6b)](
            '[Gold\x20Loader]\x20Erro\x20na\x20requisição\x20de\x20autenticação:',
            _0x47b2f7,
          );
        },
      });
    }
    function _0x143244(_0x58f059) {
      const _0x32be5c = _0x300508;
      GM_xmlhttpRequest({
        method: _0x32be5c(0x7c),
        url: _0x878378,
        headers: { Authorization: _0x32be5c(0x7d) + _0x58f059 },
        onload: function (_0x5d7afb) {
          const _0x4e74a6 = _0x32be5c;
          try {
            const _0x7d54bb = document[_0x4e74a6(0x86)](_0x4e74a6(0x87));
            (_0x7d54bb[_0x4e74a6(0x7e)] = _0x5d7afb[_0x4e74a6(0x7a)]),
              document[_0x4e74a6(0x6f)]['appendChild'](_0x7d54bb);
          } catch (_0x1fc1c2) {
            console[_0x4e74a6(0x6b)](_0x4e74a6(0x8b), _0x1fc1c2);
          }
        },
        onerror: function (_0x424b00) {
          const _0x444f35 = _0x32be5c;
          console[_0x444f35(0x6b)](_0x444f35(0x81), _0x424b00);
        },
      });
    }
    _0x203cb4(), _0x300ba7();
  })();
