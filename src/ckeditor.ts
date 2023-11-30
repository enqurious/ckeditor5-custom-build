/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";

import { Autoformat } from "@ckeditor/ckeditor5-autoformat";
import {
  Bold,
  Code,
  Italic,
  Strikethrough,
  Subscript,
  Superscript,
  Underline,
} from "@ckeditor/ckeditor5-basic-styles";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import { CodeBlock } from "@ckeditor/ckeditor5-code-block";
import type { EditorConfig } from "@ckeditor/ckeditor5-core";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { FindAndReplace } from "@ckeditor/ckeditor5-find-and-replace";
import {
  FontBackgroundColor,
  FontColor,
  FontSize,
} from "@ckeditor/ckeditor5-font";
import { Heading } from "@ckeditor/ckeditor5-heading";
import { Highlight } from "@ckeditor/ckeditor5-highlight";
import { HorizontalLine } from "@ckeditor/ckeditor5-horizontal-line";
import {
  AutoImage,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
} from "@ckeditor/ckeditor5-image";
import { Indent, IndentBlock } from "@ckeditor/ckeditor5-indent";
import { AutoLink, Link, LinkImage } from "@ckeditor/ckeditor5-link";
import { List, ListProperties } from "@ckeditor/ckeditor5-list";
import { MediaEmbed } from "@ckeditor/ckeditor5-media-embed";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { PasteFromOffice } from "@ckeditor/ckeditor5-paste-from-office";
import {
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
} from "@ckeditor/ckeditor5-table";
import { TextTransformation } from "@ckeditor/ckeditor5-typing";
import { SimpleUploadAdapter } from "@ckeditor/ckeditor5-upload";

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class Editor extends ClassicEditor {
  public static override builtinPlugins = [
    AutoImage,
    AutoLink,
    Autoformat,
    BlockQuote,
    Bold,
    Code,
    CodeBlock,
    Essentials,
    FindAndReplace,
    FontBackgroundColor,
    FontColor,
    FontSize,
    Heading,
    Highlight,
    HorizontalLine,
    Image,
    ImageCaption,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Indent,
    IndentBlock,
    Italic,
    Link,
    LinkImage,
    List,
    ListProperties,
    MediaEmbed,
    Paragraph,
    PasteFromOffice,
    SimpleUploadAdapter,
    Strikethrough,
    Subscript,
    Superscript,
    Table,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableProperties,
    TableToolbar,
    TextTransformation,
    Underline,
  ];

  public static override defaultConfig: EditorConfig = {
    toolbar: {
      items: [
        "undo",
        "redo",
        "|",
        "heading",
        "|",
        "bold",
        "italic",
        "blockQuote",
        "underline",
        "link",
        "bulletedList",
        "numberedList",
        "code",
        "|",
        "outdent",
        "indent",
        "|",
        "insertTable",
        "imageUpload",
        "mediaEmbed",
        "codeBlock",
        "findAndReplace",
        "fontColor",
        "fontSize",
        "fontBackgroundColor",
        "highlight",
        "horizontalLine",
        "strikethrough",
        "subscript",
        "superscript",
      ],
    },
    language: "en",
    image: {
      toolbar: [
        "imageTextAlternative",
        "toggleImageCaption",
        "imageStyle:inline",
        "imageStyle:block",
        "imageStyle:side",
        "linkImage",
      ],
    },
    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "tableCellProperties",
        "tableProperties",
      ],
    },
    codeBlock: {
      languages: [
        { language: "python", label: "Python" }, // The default language.
        { language: "sql", label: "SQL" },
        { language: "plaintext", label: "Plain text" },
        { language: "c", label: "C" },
        { language: "cs", label: "C#" },
        { language: "cpp", label: "C++" },
        { language: "css", label: "CSS" },
        { language: "diff", label: "Diff" },
        { language: "html", label: "HTML" },
        { language: "java", label: "Java" },
        { language: "javascript", label: "JavaScript" },
        { language: "php", label: "PHP" },
        { language: "ruby", label: "Ruby" },
        { language: "typescript", label: "TypeScript" },
        { language: "xml", label: "XML" },
      ],
    },
    fontColor: {
      colors: [
        {
          color: "#1e293b",
          label: "slate-800",
        },
        {
          color: "#334155",
          label: "slate-700",
        },
        {
          color: "#475569",
          label: "slate-600",
        },
        {
          color: "#64748b",
          label: "slate-500",
        },
        {
          color: "#94a3b8",
          label: "slate-400",
        },
        {
          color: "#ffffff",
          label: "white",
        },
        {
          color: "#005ecc",
          label: "primary",
        },
        {
          color: "#1a83ff",
          label: "primary-light",
        },
        {
          color: "#34A853",
          label: "green",
        },
        {
          color: "#50C970",
          label: "green-light",
        },
        {
          color: "#b91c1c",
          label: "red",
        },
        {
          color: "#ef4444",
          label: "red-light",
        },
        {
          color: "#d97706",
          label: "orange",
        },
        {
          color: "#f59e0b",
          label: "orange-light",
        },
        {
          color: "#7c3aed",
          label: "violet",
        },
        {
          color: "#8b5cf6",
          label: "violet-light",
        },
      ],
    },
    fontBackgroundColor: {
      colors: [
        {
          color: "#005ECC",
          label: "primary",
        },
        {
          color: "#DDF2FF",
          label: "primary-light",
        },
        {
          color: "#34A853",
          label: "green",
        },
        {
          color: "#E4FCE9",
          label: "green-light",
        },
        {
          color: "#B91C1C",
          label: "red",
        },
        {
          color: "#FEE2E2",
          label: "red-light",
        },
        {
          color: "#B45309",
          label: "orange",
        },
        {
          color: "#FEF3C7",
          label: "orange-light",
        },
        {
          color: "#6D28D9",
          label: "violet",
        },
        {
          color: "#EDE9FE",
          label: "violet-light",
        },
        {
          color: "#111827",
          label: "gray",
        },
        {
          color: "#F3F4F6",
          label: "gray-light",
        },
      ],
    },
  };
}

export default Editor;
