import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export class RegisterCustomTagsPlugin extends Plugin {
  init() {
    const editor = this.editor;
    editor.model.schema.extend("paragraph", {
      allowAttributes: "id",
    });
    editor.model.schema.register("sectionTitle", {
      inheritAllFrom: "$block",
      allowAttributes: ["id", "customtag", "contenteditable", "class"],
    });
    editor.conversion.elementToElement({
      model: "sectionTitle",
      view: "sectionTitle",
    });
    editor.conversion.attributeToAttribute({ model: "id", view: "id" });
    editor.conversion.attributeToAttribute({
      model: "customtag",
      view: "customtag",
    });
    //  For Public Link
    editor.model.schema.register("publicLink", {
      allowAttributes: ["id", "customtag", "contenteditable", "class"],
      allowIn: "paragraph, anchor",
    });
    editor.conversion.elementToElement({
      model: "publicLink",
      view: "publicLink",
    });
    editor.conversion.attributeToAttribute({ model: "id", view: "id" });
    editor.conversion.attributeToAttribute({
      model: "customtag",
      view: "customtag",
    });
    // For Intranet Link
    editor.model.schema.register("intranetLink", {
      allowAttributes: ["id", "customtag", "contenteditable", "class"],
      allowIn: "paragraph, anchor",
    });
    editor.conversion.elementToElement({
      model: "intranetLink",
      view: "intranetLink",
    });
    editor.conversion.attributeToAttribute({ model: "id", view: "id" });
    editor.conversion.attributeToAttribute({
      model: "customtag",
      view: "customtag",
    });
    // For Predefine Link
    editor.model.schema.register("predefineLink", {
      allowAttributes: ["id", "customtag", "contenteditable", "class"],
      allowIn: "paragraph, anchor",
    });
    editor.conversion.elementToElement({
      model: "predefineLink",
      view: "predefineLink",
    });
    editor.conversion.attributeToAttribute({ model: "id", view: "id" });
    editor.conversion.attributeToAttribute({
      model: "customtag",
      view: "customtag",
    });
    // For Population
    editor.model.schema.register("populationStart", {
      allowAttributes: ["id", "customtag", "contenteditable", "class"],
      isObject: true,
      allowIn: "paragraph",
    });
    editor.conversion.elementToElement({
      model: "populationStart",
      view: "populationStart",
    });
    editor.conversion.attributeToAttribute({ model: "id", view: "id" });
    editor.conversion.attributeToAttribute({
      model: "customtag",
      view: "customtag",
    });
    editor.model.schema.register("populationEnd", {
      allowAttributes: ["id", "customtag", "contenteditable", "class"],
      isObject: true,
      allowIn: "paragraph",
    });
    editor.conversion.elementToElement({
      model: "populationEnd",
      view: "populationEnd",
    });
    editor.conversion.attributeToAttribute({ model: "id", view: "id" });
    editor.conversion.attributeToAttribute({
      model: "customtag",
      view: "customtag",
    });
    editor.model.schema.register("innerTextPop", {
      allowAttributes: ["id", "customtag", "contenteditable", "class"],
      isObject: true,
      allowIn: "paragraph",
    });
    editor.conversion.elementToElement({
      model: "innerTextPop",
      view: "innerTextPop",
    });
    editor.conversion.attributeToAttribute({ model: "id", view: "id" });
    editor.conversion.attributeToAttribute({
      model: "customtag",
      view: "customtag",
    });
  }
}
export default RegisterCustomTagsPlugin;
