import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export class InsertPopulationButtonPlugin extends Plugin {
  init() {
    const editor = this.editor;
    editor.ui.componentFactory.add("addPopulation", (locale) => {
      const view = new ButtonView(locale);

      view.class = "addpopulaiontoolbar";
      view.set({
        label: "Add Population",
        icon: `<svg xmlns='http:// www.w3.org/2000/svg' height='1em' viewBox='0 0 448 512'><path d='M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z'/></svg>`,
        tooltip: true,
      });

      // Execute a callback function when the button is clicked
      view.on("execute", () => {
        let pop_up_button = document.getElementById("showPopulation_Editor");
        let get_pop_up_button = document.getElementById(
          "showPopulation_EditorValue"
        );
        let popValue = "";
        if (pop_up_button) {
          pop_up_button.click();
        }
        if (get_pop_up_button) {
          // Insert the text at the user's current position
          const docFrag = editor.model.change((writer) => {
            const p1 = writer.createElement("paragraph");
            const p2 = writer.createElement("paragraph");
            const p3 = writer.createElement("paragraph");
            const blockQuote = writer.createElement("blockQuote");
            const docFrag = writer.createDocumentFragment();
            const population = sessionStorage.getItem(
              "population_selectedCategory"
            );
            writer.append(p1, docFrag);
            writer.append(blockQuote, docFrag);
            writer.append(p3, blockQuote);
            writer.append(p2, blockQuote);
            writer.insertText("BEGIN", p1);
            writer.insertText("END", p2);
            // ***************************
            const s1 = writer.createElement("select");
            const o1 = writer.createElement("option");
            const o2 = writer.createElement("option");
            const docFragSel = writer.createDocumentFragment();

            writer.append(s1, docFragSel);
            writer.append(o1, s1);
            writer.append(o2, s1);
            writer.insertText("Existing Image", o1);
            writer.insertText("Upload Image", o2);
            return docFrag;
          });
          editor.model.insertContent(docFrag);
        }
      });
      return view;
    });
  }
}
export default InsertPopulationButtonPlugin;