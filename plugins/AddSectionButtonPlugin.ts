import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export class AddSectionButtonPlugin extends Plugin {
  isCollapsed = false;
  arr = [];
  init() {
    const editor = this.editor;
    editor.ui.componentFactory.add("addSection", (locale) => {
      const view = new ButtonView(locale);

      view.set({
        label: "Add Section",
        tooltip: true,
        withText: true,
      });

      // Execute a callback function when the button is clicked
      view.on("execute", () => {
        editor.model.change((writer) => {
          let pop_up_button = document.getElementById("addSection_Editor");
          if (pop_up_button) {
            pop_up_button.click();
          }
        });
        editor.model.schema.register("sectionTitle", {
          inheritAllFrom: "$block",
          allowAttributes: ["id", "customtag", "contenteditable"],
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
        editor.data.set(
          '<p><sectionTitle id="idA">wordA</sectionTitle> lorem ipsum <sectionTitle id="idB">wordB</sectionTitle></p>'
        );
      });
      return view;
    });
  }
}
export default AddSectionButtonPlugin;
