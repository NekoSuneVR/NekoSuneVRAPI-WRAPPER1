# NekoSuneVRAPI-WRAPPER1

API WRAPPER TESTER

```node

const NEKOSUNEAPI = require('nekosuneapi-wrapper');
const wrapper = new NEKOSUNEAPI('nekosunevr-freekey');

wrapper.twitch('nekosunevr').then((catText) => console.log(catText)).catch((err) => console.log(err));

wrapper.kick('nekosunevr').then((catText) => console.log(catText)).catch((err) => console.log(err));

wrapper.dlive('chisdealhd').then((catText) => console.log(catText)).catch((err) => console.log(err));

wrapper.trovo('nekosunevr').then((catText) => console.log(catText)).catch((err) => console.log(err));

wrapper.vimm('chisdealhd').then((catText) => console.log(catText)).catch((err) => console.log(err));

```
