import React from "react";
export const SmallHelp = () => {
  return (
    <div className="notice">
      <span className="warn">
        <p>
          生成したICSファイルは新しく作ったカレンダーにインポートしてください！
        </p>
      </span>
      <p>
        テスト期間中は授業によって予定が変更されることがあるため、試験日に予定は登録されません。気をつけてください
      </p>
      <p>
        モジュールの期間は
        <a
          href="https://www.tsukuba.ac.jp/campuslife/calendar-school/"
          target="_blank"
          rel="noopener noreferrer"
        >
          学年暦
        </a>
        に基づいています
      </p>
      <p>祝日に授業は登録されません</p>
      <p>通年授業は現在登録に対応していません</p>
      <p>
        学年暦に表示されている振替には対応していますが、それ以外の振替には対応していません
      </p>
    </div>
  );
};
