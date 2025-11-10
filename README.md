# TwinC

[TWINS](https://twins.tsukuba.ac.jp/campusweb/)や[KdBもどき](https://make-it-tsukuba.github.io/alternative-tsukuba-kdb/)からダウンロードしたCSVをics形式に変換して、Googleカレンダーなどに授業情報を簡単に追加できます。今年度の祝日や振替にも対応しています。

## 使い方

[TwinC](https://mimori256.github.io/twinc/)のヘルプページを参照してください。

### コントリビューション

IssueおよびPRはいつでも受け付けています。

### その他

科目番号とその科目のモジュール、曜時限のデータは、１週間おきにGithub Actionsによって自動で更新されます。  
KdBから、科目情報を取得するスクリプト[kdb-parse](https://github.com/Mimori256/kdb-parse) によって生成された、[kdb_twinc.json](https://github.com/Mimori256/kdb-parse/blob/main/kdb_twinc.json) を取得して、各データを更新しています。
