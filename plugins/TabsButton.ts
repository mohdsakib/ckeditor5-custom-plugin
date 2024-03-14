import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export class TabsButton extends Plugin {
  init() {
    const editor = this.editor;
    editor.ui.componentFactory.add("addTabs", (locale) => {
      
      const button = new ButtonView(locale);

      button.set({
        label: "Add Tabs",
        tooltip: true,
        withText: true,
      });

      // Execute a callback function when the button is clicked
      button.on("execute", () => {
        const now = new Date();
        // Change the model using the model writer
        const tabs = `
                  <ul class='nav'>
                      <li class='nav-item'>
                          <a class='nav-link active' aria-current='page' href='#'>Active</a>
                      </li>
                      <li class='nav-item'>
                          <a class='nav-link' href='#'>Link</a>
                      </li>
                      <li class='nav-item'>
                          <a class='nav-link' href='#'>Link</a>
                      </li>
                      <li class='nav-item'>
                          <a class='nav-link disabled' href='#' tabindex='-1' aria-disabled='true'>Disabled</a>
                      </li>
                      </ul>
                  `;
        editor.model.change((writer) => {
          // Insert the text at the user's current position
          editor.model.insertContent(writer.createText(tabs));
        });
      });
      return button;
    });
  }
}
export default TabsButton;