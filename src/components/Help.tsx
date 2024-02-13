import React from "react";
import download from "../assets/img/download.webp";
import twinc1 from "../assets/img/twinc1.webp";
import twinc2 from "../assets/img/twinc2.webp";
import twinc3 from "../assets/img/twinc3.webp";
import twinc4 from "../assets/img/twinc4.webp";
import twinc5 from "../assets/img/twinc5.webp";

import { helpStyle } from "./styles";

const Help = () => {
  return (
    <div className={helpStyle}>
      <h2>Help</h2>
      <div className="instruction">
        <p>以下、パソコンでの使用を想定しています</p>
        <p>TWINSからカレンダーを作る場合</p>
        <p>
          <a
            href="https://twins.tsukuba.ac.jp/campusweb/campussmart.do"
            target="_blank"
            rel="nooperner noreferrer"
          >
            TWINS
          </a>
          にログインして、履修→カレンダーにしたいモジュールの下のダウンロードボタンから、CSVファイルを出力してください。
        </p>
        <img
          src={twinc1}
          width="75%"
          alt="TWINSのCSVファイルをダウンロードする箇所"
        />
        <p>
          (ちなみに、このファイルは
          <a
            href="https://www.twinte.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twin:te
          </a>
          の授業登録にも使えます)
        </p>
        <p>KdBもどきからカレンダーを作る場合</p>
        1．
        <a
          href="https://make-it-tsukuba.github.io/alternative-tsukuba-kdb/"
          target="_blank"
          rel="nooperner noreferrer"
        >
          KdBもどき
        </a>
        にPCでアクセスする
        <br />
        2．仮の履修時間割を組む
        <br />
        3．検索条件をクリアし、「お気に入り」にチェックを入れて検索する
        <br />
        4．画面最下部の「CSVダウンロード」をクリックする
        <p>
          次に、そのファイルをTwinCの「ファイル選択」ボタンから選択すると、カレンダーファイルのダウンロードが自動で始まります。
        </p>
        <img
          src={download}
          width="50%"
          alt="カレンダーファイルのダウンロード方法"
          loading="lazy"
        />
        <p>ファイル名は(ダウンロード時刻) + twinc.icsとなっています</p>
        <p>
          ここではGoogleカレンダーを例にします。Macのカレンダーなどに追加したい場合は自分で調べてください。
        </p>
        <p>
          <a
            href="https://calendar.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Googleカレンダーのトップページ
          </a>
          の右上から、設定を開いてください。
        </p>
        <img
          src={twinc2}
          width="75%"
          alt="Googleカレンダーの設定の箇所"
          loading="lazy"
        />
        <p>
          そして、カレンダーを追加→新しいカレンダーを作成を選択して、カレンダーに名前をつけて、カレンダーを作成してく
          ださい。(2回目以降は新しく作る必要はありません)
        </p>
        <img
          src={twinc3}
          width="75%"
          alt="Googleカレンダーで新しいカレンダーを作成する箇所"
          loading="lazy"
        />
        <p>
          カレンダーが生成されるまで待ち、インポート/エクスポート→インポートから、カレンダーに追加で、
          <span className="warn">
            <u>自分が作成したカレンダーを選択してから</u>
          </span>
          パソコンからファイルを選択をクリックして、ダウンロードしたファイルを選択、インポートをクリックしてください
        </p>
        <img
          src={twinc4}
          width="75%"
          alt="Googleカレンダーで新しいカレンダーをインポートする箇所"
          loading="lazy"
        />
        <p>
          間違えて、他の予定が入っているカレンダーに追加してしまうと、後で削除したいときに削除するのが面倒になってしまうので、注意してください
        </p>
        <p>
          これで完成です!
          他のモジュールも追加したい場合も、同様の手順でファイルを最初に作ったカレンダーにインポートしてください
        </p>
        <img src={twinc5} width="75%" alt="完成例" loading="lazy" />
        <div className="notice">
          <h2>注意</h2>
          <p>各モジュールの試験期間と試験日には、授業予定が登録されません</p>
          <p>
            モジュールの期間は、
            <a
              href="https://www.tsukuba.ac.jp/campuslife/calendar-school/"
              target="_blank"
              rel="noopener noreferrer"
            >
              学年暦
            </a>
            に基づいています
          </p>
          <p>祝日や学年暦に書かれている休日も、授業予定が登録されません</p>
          <p>今年度開講されない授業については登録することができません</p>
          <p>通年授業の登録には対応していません</p>
          <p>
            また、学年暦に書かれている振替に対応して、授業予定は登録されています
          </p>
          <p>
            臨時の休講や振替には対応していないため、自分で確認して逐次対応してください
          </p>
          <p>
            集中、応談、土日、夏季休暇といった特別な日程には対応していません
          </p>
          <p className="warn">
            テストはしていますが、100%の正確性は保証できません
          </p>
          <p className="warn">このアプリが原因で遅刻しても責任は負いかねます</p>
        </div>
      </div>
      <div className="About">
        <h2>About</h2>
        <p>
          このページは、有志の筑波大生によって作られています。大学公式ではありません
        </p>
        <p>
          このツールの使用によって生じた不利益等について、開発者は一切の責任を負いません。
        </p>
        <p>
          何かこのページに問題があったり、質問などがあれば、
          <a
            href="https://github.com/Mimori256/twinc"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          または、
          <a
            href="https://x.com/mimorimori256"
            target="_blank"
            rel="noopener noreferrer"
          >
            X(旧Twitter)
          </a>
          に連絡いただけるとありがたいです。
        </p>
      </div>
    </div>
  );
};

export default Help;
