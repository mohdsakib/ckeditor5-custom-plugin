/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import Subscript from "@ckeditor/ckeditor5-basic-styles/src/subscript";
import Superscript from "@ckeditor/ckeditor5-basic-styles/src/superscript";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";

// Assuming the custom plugins are correctly defined and exported in their respective files
import AddSectionButtonPlugin from "./plugins/AddSectionButtonPlugin";
// import Copy from "./plugins/Copy";
import InsertPopulationButtonPlugin from "./plugins/InsertPopulationButtonPlugin";
import LinkButtonPlugin from "./plugins/LinkButtonPlugin";
// import Paste from "./plugins/Paste";
import RegisterCustomTagsPlugin from "./plugins/RegisterCustomTagsPlugin";
import RemovePopulationButtonPlugin from "./plugins/RemovePopulationButtonPlugin";
import TabsButton from "./plugins/TabsButton";
// import UnLinkButtonPlugin from "./plugins/UnLinkButtonPlugin";
import UploadImagePlugin from "./plugins/UploadImagePlugin";

export default class Editor extends ClassicEditorBase {
  static get pluginName() {
    return 'Editor';
  }

  // Overriding builtinPlugins to include both default and custom plugins
  static override get builtinPlugins() {
    return [
      // Default CKEditor plugins
      Alignment,
      Autoformat,
      BlockQuote,
      Bold,
      Essentials,
      Heading,
      Image,
      ImageCaption,
      ImageStyle,
      ImageToolbar,
      ImageUpload,
      Indent,
      IndentBlock,
      Italic,
      Link,
      List,
      Paragraph,
      PasteFromOffice,
      RemoveFormat,
      Strikethrough,
      Subscript,
      Superscript,
      Table,
      TableCellProperties,
      TableProperties,
      TableToolbar,
      TextTransformation,
      // Custom plugins
      AddSectionButtonPlugin,
      // Copy,
      InsertPopulationButtonPlugin,
      LinkButtonPlugin,
      // Paste,
      RegisterCustomTagsPlugin,
      RemovePopulationButtonPlugin,
      TabsButton,
      // UnLinkButtonPlugin,
      UploadImagePlugin,
    ] as any;
  }

  // Overriding defaultConfig to customize the toolbar and other configurations
  static override get defaultConfig() {
    return {
      toolbar: {
        items: [
          "heading",
          "|",
          "bold",
          "italic",
          "bulletedList",
          "numberedList",
          "|",
          "outdent",
          "indent",
          "removeFormat",
          "imageUpload",
          "link",
          "blockQuote",
          "insertTable",
          "undo",
          "redo",
          "-",
          "style",
          "alignment",
          "findAndReplace",
          "-",
          "links",
          "unlinks",
          "addTabs",
          "addPopulation",
          "removePopulation",
          "uploadImage",
          "copy",
          "paste",
          "addSection",
          "fontColor",
          "highlight",
        ],
        shouldNotGroupWhenFull: true,
      },
      language: "en",
      image: {
        toolbar: [
          "imageTextAlternative",
          "toggleImageCaption",
          "imageStyle:inline",
          "imageStyle:block",
          "imageStyle:side",
        ],
      },
      table: {
        contentToolbar: [
          "insertTable",
          "mergeTableCells",
          "tableColumn",
          "tableProperties",
          "tableRow",
        ],
      },
      fontColor: {
        colors: [
          {
            color: "hsl(120, 75%, 60%)",
            label: "Green",
          },
        ],
      },
      indentBlock: {
        offset: 1,
        unit: "em",
      },
    };
  }
}
