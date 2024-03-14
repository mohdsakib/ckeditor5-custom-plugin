import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export class LinkButtonPlugin extends Plugin {
  init() {
    const editor = this.editor;
    editor.ui.componentFactory.add("links", (locale) => {
      const view = new ButtonView(locale);

      view.set({
        label: "Add Link",
        icon: `<svg viewBox="0 0 20 20" xmlns="http:// www.w3.org/2000/svg"><path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"/></svg>`,
        tooltip: true,
      });

      // Execute a callback function when the button is clicked
      view.on("execute", () => {
        let get_link_button = document.getElementById("showLinks_Editor");
        if (get_link_button) {
          get_link_button.click();
        }

        if (get_link_button) {
          // Insert the text at the user's current position
          const docFrag = editor.model.change((writer) => {
            const p1 = writer.createElement("paragraph");
            const p2 = writer.createElement("paragraph");
            const p3 = writer.createElement("paragraph");
            const blockQuote = writer.createElement("blockQuote");
            const docFrag = writer.createDocumentFragment();

            return docFrag;
          });
          editor.model.insertContent(docFrag);
        }
      });
      return view;
    });
  }
}
export default LinkButtonPlugin;