
import { EV_VALUES, RV_COLORS, RV_TABLE } from './constants.js';

async function rvRoll() {

  const av = parseInt(document.getElementById('ascendant-av-input').value);
  const dv = parseInt(document.getElementById('ascendant-dv-input').value);
  const ev = parseInt(document.getElementById('ascendant-ev-input').value);

  const rvIdx = av - dv + 6;
  const evIdx = ev - 1;

  let baseMsg = `
    <div class="dice-roll">
      <div class="dice-result">
        <div class="dice-formula">
          AV = ${av}
          DV = ${dv}
          EV = ${ev} <br>
          RV = ${av - dv}
        </div>
  `;
  let resultMsg = null;

  if (rvIdx < 0) {
    // Auto fail
    console.log('AUTO FAIL');
    resultMsg = `
      <div class="dice-total" style="background-color:white">
        Auto Fail
      </div>
    `;
    let finalMsg = baseMsg + resultMsg + '</div></div>'
    ChatMessage.create({
      type: CONST.CHAT_MESSAGE_TYPES.OTHER,
      content: finalMsg,
    });
    return;
  } else if (rvIdx > 12) {
    // Auto hit
    console.log('AUTO HIT');
    resultMsg = `
      <div class="dice-total" style="background-color:red">
        Auto Hit
      </div>
    `;
    let finalMsg = baseMsg + resultMsg + '</div></div>'
    ChatMessage.create({
      type: CONST.CHAT_MESSAGE_TYPES.OTHER,
      content: finalMsg,
    });
    return;
  }

  let roll = new Roll('1d100');

  await roll.evaluate();

  let color = null;
  let multiplier = null;
  for (let colorIdx = 0; colorIdx <= 4; colorIdx++) {
    if (RV_TABLE[rvIdx][colorIdx].min <= roll.total && RV_TABLE[rvIdx][colorIdx].max >= roll.total) {
      // Find color for table and multiplier
      console.log(colorIdx);
      color = RV_COLORS[colorIdx];
      multiplier = colorIdx === 0 ? 0 : 2 ** (colorIdx - 1);  // final dmg is base * color position
      break;
    }
  };

  if (isNaN(ev)) {
    resultMsg = `
      <div class="dice-total" style="background-color:${color}">
        D100 = ${roll.total}
      </div>
    `
  } else {
    resultMsg = `
      <div class="dice-total" style="background-color:${color}">
        D100 = ${roll.total} <br>
        Daño ${EV_VALUES[evIdx] * multiplier}
      </div>
    `
  }

  if (roll.total <= av) {
    resultMsg = resultMsg + `
      <div class="dice-total">
        Special effect active! <br>
        Potency = ${ev - 1}
      </div>
    `;
  }

  let finalMsg = baseMsg + resultMsg + '</div></div>'

  ChatMessage.create({
    type: CONST.CHAT_MESSAGE_TYPES.ROLL,
    roll: roll,
    content: finalMsg,
  });
}

function rvDialog() {
  console.log('rv dialog');
  Dialog.prompt({
    title: game.i18n.localize('Challenge Action Resolution Table - CHART'),
    content: `
      <label>${game.i18n.localize('AV - Ataque')}</label><br>
      <input type="text" id="ascendant-av-input">
      <label>${game.i18n.localize('DV - Defensa')}</label><br>
      <input type="text" id="ascendant-dv-input">
      <label>${game.i18n.localize('EV - Efecto')}</label><br>
      <input type="text" id="ascendant-ev-input">
      <br>
      `,
    label: 'Roll D100',
    callback: () => {
      rvRoll();
    },
  });
}

rvDialog()
