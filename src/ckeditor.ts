/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic, Strikethrough, Subscript, Superscript } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { DataSchema, GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support';
import {
	Image,
	ImageCaption,
	ImageInsert,
	ImageResize,
	ImageUpload,
	ImageToolbar,
	ImageStyle,
} from '@ckeditor/ckeditor5-image';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { Link, LinkCommand } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { Style } from '@ckeditor/ckeditor5-style';
import { Table, TableCellProperties,
	TableProperties,
	TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { Plugin } from '@ckeditor/ckeditor5-core';
import { ButtonView } from '@ckeditor/ckeditor5-ui';
import { LinkUI } from '@ckeditor/ckeditor5-link';
import LinkFormView from '@ckeditor/ckeditor5-link/src/ui/linkformview';


// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

/* Adding custom plugins code */

class RemovePopulationButtonPlugin extends Plugin {
	init() {
        const editor = this.editor;

        editor.ui.componentFactory.add( 'removePopulation', (locale) => {
			// The button will be an instance of ButtonView.
			const view = new ButtonView(locale);
			view.class = "removepopulaiontoolbar"
			view.set( {
				label: 'Remove Population',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 550"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L353.3 251.6C407.9 237 448 187.2 448 128C448 57.3 390.7 0 320 0C250.2 0 193.5 55.8 192 125.2L38.8 5.1zM264.3 304.3C170.5 309.4 96 387.2 96 482.3c0 16.4 13.3 29.7 29.7 29.7H514.3c3.9 0 7.6-.7 11-2.1l-261-205.6z"/></svg>`,
				tooltip: true
			} );

			//Execute a callback function when the button is clicked
			//Execute a callback function when the button is clicked
			view.on( 'execute', () => {
				const now = new Date();
				let removePopulation = document.getElementById('removePopulation_Editor');
				if (removePopulation) {
					removePopulation.click();
					console.log('remove population click from js ');
				}
				//Change the model using the model writer
				// editor.model.change( writer => {

					//Insert the text at the user's current position
					// editor.model.insertContent( );
				// } );
			} );

			return view;
		} );
    }
}


class InsertPopulationButtonPlugin extends Plugin {
	init() {
        const editor = this.editor;

        editor.ui.componentFactory.add( 'addPopulation', (locale) => {
			// The button will be an instance of ButtonView.
			const view = new ButtonView(locale);
			view.class = "addpopulaiontoolbar"
			view.set( {
				label: 'Add Population',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>`,
				tooltip: true
                // withText: true,
				// class: 'insertTabsCkEditor'
			} );

			//Execute a callback function when the button is clicked
			view.on( 'execute', () => {
				// editor.model.change( writer => {
					let pop_up_button = document.getElementById('showPopulation_Editor');
					let get_pop_up_button = document.getElementById('showPopulation_EditorValue');
					let popValue = '';
					if (pop_up_button) {
					pop_up_button.click();
					// popValue = sessionStorage.getItem('population_selectedCategory');
				}
					if(get_pop_up_button){
						//Insert the text at the user's current position
					const docFrag = editor.model.change( writer => {
						const p1 = writer.createElement( 'paragraph' );
						const p2 = writer.createElement( 'paragraph' );
						const p3 = writer.createElement( 'paragraph' );
						const blockQuote = writer.createElement( 'blockQuote' );
						const docFrag = writer.createDocumentFragment();
						const population = sessionStorage.getItem('population_selectedCategory');
						writer.append( p1, docFrag );
						writer.append( blockQuote, docFrag );
						writer.append( p3, blockQuote );
						writer.append( p2, blockQuote );
						writer.insertText( 'BEGIN', p1 );
						// writer.insertText(population, p3);
						writer.insertText( 'END', p2 );
					/*************************** */
						const s1 = writer.createElement( 'select' );
						const o1 = writer.createElement( 'option' );
						const o2 = writer.createElement( 'option' );
						const docFragSel = writer.createDocumentFragment();
					
						writer.append( s1, docFragSel);
						writer.append( o1, s1);
						writer.append( o2, s1);
						writer.insertText( 'Existing Image', o1);
						writer.insertText( 'Upload Image', o2);
						// const myRawElement = downcastWriter.createRawElement( 'div' );

						// const rawElement = myRawElement.render = function( domElement, domConverter ) {
						// 	domConverter.setContentOf( domElement, '<b>This is the raw content of myRawElement.</b>' );
						// };
						// writer.append(myRawElement.render = function( domElement, domConverter ) {
						// 	domConverter.setContentOf( domElement, '<b>This is the raw content of myRawElement.</b>' );
						// }, docFragSel);
					
						return docFrag;
					} );
					// } );
					// editor.model.insertContent( writer.insert( paragraph, position ) );
					editor.model.insertContent( docFrag );
					}
					
				
			} );

			return view;
		} );
    }
}

class LinkButtonPlugin extends Plugin {
	init() {
        const editor = this.editor;

        editor.ui.componentFactory.add( 'links', (locale) => {
			// The button will be an instance of ButtonView.
			const view = new ButtonView(locale);

			view.set( {
				label: 'Add Link',
                icon: `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"/></svg>`,
				tooltip: true,
                // withText: true,
			} );

			//Execute a callback function when the button is clicked
			view.on( 'execute', () => {
				// editor.model.change( writer => {
					// const selection = editor.model.document.selection.getSelectedText;
					// console.log("ckeditor ==>  ",this.editor.instances.editor.getSelection().getSelectedText());
				//	const range = selection.getFirstRange();

					// for (const item of range.getItems()) {
					// 	console.log(item.data) //return the selected text
					// }  
					// console.log('selection in link ', selection);
					let get_link_button = document.getElementById('showLinks_Editor');
					if(get_link_button) {
						get_link_button.click();
					}
					
					if(get_link_button){
						//Insert the text at the user's current position
						const docFrag = editor.model.change( writer => {
						const p1 = writer.createElement( 'paragraph' );
						const p2 = writer.createElement( 'paragraph' );
						const p3 = writer.createElement( 'paragraph' );
						const blockQuote = writer.createElement( 'blockQuote' );
						const docFrag = writer.createDocumentFragment();
										
						return docFrag;
					} );
					// } );
					// editor.model.insertContent( writer.insert( paragraph, position ) );
					editor.model.insertContent( docFrag );
					}
					
				
			} );

			return view;
		} );
    }

}
class UnLinkButtonPlugin extends Plugin {
	init() {
        const editor = this.editor;
		const linkCommand: LinkCommand = editor.commands.get( 'link' )!;
        editor.ui.componentFactory.add( 'unlinks', (locale) => {
			// The button will be an instance of ButtonView.
			const view = new ButtonView(locale);

			view.set( {
				label: 'Remove Link',
                icon: `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184zm4.919 10.562-1.414 1.414a.75.75 0 1 1-1.06-1.06l1.414-1.415-1.415-1.414a.75.75 0 0 1 1.061-1.06l1.414 1.414 1.414-1.415a.75.75 0 0 1 1.061 1.061l-1.414 1.414 1.414 1.415a.75.75 0 0 1-1.06 1.06l-1.415-1.414z"/></svg>`,
				tooltip: true,
                // withText: true,
			} );
			view.isEnabled = false;

			//Execute a callback function when the button is clicked
			view.bind( 'isEnabled' ).to( linkCommand );
			view.on( 'execute', () => {
				// editor.model.change( writer => {
					let get_unlink_button = document.getElementById('showUnLinks_Editor');
					if(get_unlink_button) {
						get_unlink_button.click();
					}
					
					if(get_unlink_button){
						//Insert the text at the user's current position
						const docFrag = editor.model.change( writer => {
						const p1 = writer.createElement( 'paragraph' );
						const p2 = writer.createElement( 'paragraph' );
						const p3 = writer.createElement( 'paragraph' );
						const blockQuote = writer.createElement( 'blockQuote' );
						const docFrag = writer.createDocumentFragment();
										
						return docFrag;
					} );
					// } );
					// editor.model.insertContent( writer.insert( paragraph, position ) );
					editor.model.insertContent( docFrag );
					}
					
				
			} );

			return view;
		} );
    }

}


class TabsButton extends Plugin {
	init() {
        const editor = this.editor;

        editor.ui.componentFactory.add( 'addtabs', (locale) => {
			// The button will be an instance of ButtonView.
			const button = new ButtonView(locale);

			button.set( {
				label: 'Add Tabs',
                // icon: unlink,
				tooltip: true,
                withText: true,
			} );

			//Execute a callback function when the button is clicked
			button.on( 'execute', () => {
				const now = new Date();
				//Change the model using the model writer
				const tabs = `
				<ul class="nav">
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="#">Active</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item">
						<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
					</li>
					</ul>
				`;
				editor.model.change( writer => {

					//Insert the text at the user's current position
					editor.model.insertContent(writer.createText(tabs));
				} );
				//editor.instances['ClassicEditor'].execCommand('tabs');
			} );

			return button;
		} );
    }
} 
/** Adding customs plugin  */
class UploadImagePlugin extends Plugin {
	init() {
		const editor = this.editor;
		editor.ui.componentFactory.add( 'uploadImage', (locale) => {
			// The button will be an instance of ButtonView.
			const button = new ButtonView(locale);
			button.set( {
				label: 'Upload Image',
				icon: `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>`,
				tooltip: true,
			} );
			//Execute a callback function when the button is clicked
			button.on( 'execute', () => {
				const now = new Date();
				// console.log('now form js ', now);
				const showOverlayPanel= document.getElementById('showOverlay_Panel');
				// console.log(showOverlayPanel,'abxx')
				if (showOverlayPanel) {
					showOverlayPanel.click();	
				// console.log(showOverlayPanel,'abxx');		
				}
				//Change the model using the model writer
				editor.model.change( writer => {
 
					//Insert the text at the user's current position
					editor.model.insertContent( writer.createText('') ) });
				} );			
			return button;
		} );
		
	}
}

// Adding custom pluggin for Copy and paste
class Copy extends Plugin {
    init() {
        const editor = this.editor;
        // const selObj = window.getSelection()?.toString();
 
 
        editor.ui.componentFactory.add('copy', (locale) => {
            // The button will be an instance of ButtonView.
            const view = new ButtonView(locale);
 
            view.set({
                label: 'Copy',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 66 64" enable-background="new 0 0 64 64" xml:space="preserve">
           <g id="Text-files">
               <path d="M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228
                   C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999
                   c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64
                   h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002
                   C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228
                   c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999
                   c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z
                    M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699
                   c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946
                   c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999
                   h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z"/>
               <path d="M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005
                   c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997
                   C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z"/>
               <path d="M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986
                   c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016
                   C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z"/>
               <path d="M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                   s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997
                   S39.16465,29.4603004,38.6031494,29.4603004z"/>
               <path d="M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                   s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997
                   S29.0059509,37.5872993,28.4444485,37.5872993z"/>
           </g>
           </svg>`,
                tooltip: true,
                // withText: true
 
            });
            // const selObj = window.getSelection()?.toString();
            // view.isEnabled = Boolean(selObj);
            // editor.model.document.on('selectionChange', () => {
            // const selObj = window.getSelection()?.toString();
            //  console.log(selObj, selObj?.length);
            // view.isEnabled = Boolean(selObj);
            // })
            // const select = editor.getData()
            // const textSelected = select.getSelectedElement();
 
 
 
            view.on('execute', () => {
 
                // const range = selection.getFirstRange();
                let copyText = document.getElementById('copyButton');
                if (copyText) {
                    copyText.click();
                    console.log('copy clicked ',);
                }
            });
 
            return view;
        });
    }
}
 
// adding paste pluggin
class Paste extends Plugin {
    init() {
        const editor = this.editor;
 
        editor.ui.componentFactory.add('paste', (locale) => {
            // The button will be an instance of ButtonView.
            const view = new ButtonView(locale);
            // editor.model.getSelectedContent()
 
            view.set({
                label: 'Paste',
                icon: `<svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
     viewBox="0 0 502 502" xml:space="preserve">
     <g>
         <g>
             <g>
                 <path d="M467.35,190.176l-70.468-70.468c-1.876-1.875-4.419-2.929-7.071-2.929h-23.089V49c0-5.523-4.478-10-10-10h-115v-2.41
                     c0-20.176-16.414-36.59-36.59-36.59h-11.819c-20.176,0-36.591,16.415-36.591,36.59V39h-115c-5.522,0-10,4.477-10,10v386
                     c0,5.523,4.478,10,10,10h146.386v47c0,5.523,4.478,10,10,10h262.171c5.522,0,10-4.477,10-10V197.247
                     C470.279,194.595,469.225,192.051,467.35,190.176z M399.811,150.921l36.326,36.326h-36.326V150.921z M144.721,59h47
                     c5.522,0,10-4.477,10-10s-4.478-10-10-10h-15v-2.41c0-9.148,7.442-16.59,16.591-16.59h11.819c9.147,0,16.59,7.442,16.59,16.59V49
                     c0,5.523,4.478,10,10,10h22v20h-109V59z M198.107,116.779c-5.522,0-10,4.477-10,10V425H51.721V59h73v30c0,5.523,4.478,10,10,10
                     h129c5.522,0,10-4.477,10-10V59h73v57.779H198.107z M450.278,482H208.107V136.779H379.81v60.468c0,5.523,4.478,10,10,10h60.468
                     V482z"/>
                 <path d="M243.949,253.468h125.402c5.522,0,10-4.477,10-10c0-5.523-4.478-10-10-10H243.949c-5.522,0-10,4.477-10,10
                     C233.949,248.991,238.427,253.468,243.949,253.468z"/>
                 <path d="M414.437,283.478H243.949c-5.522,0-10,4.477-10,10s4.478,10,10,10h170.487c5.522,0,10-4.477,10-10
                     S419.959,283.478,414.437,283.478z"/>
                 <path d="M414.437,333.487H243.949c-5.522,0-10,4.477-10,10s4.478,10,10,10h170.487c5.522,0,10-4.477,10-10
                     S419.959,333.487,414.437,333.487z"/>
                 <path d="M414.437,383.497H243.949c-5.522,0-10,4.477-10,10s4.478,10,10,10h170.487c5.522,0,10-4.477,10-10
                     S419.959,383.497,414.437,383.497z"/>
                 <path d="M397.767,253.468h16.67c5.522,0,10-4.477,10-10c0-5.523-4.478-10-10-10h-16.67c-5.522,0-10,4.477-10,10
                     C387.767,248.991,392.245,253.468,397.767,253.468z"/>
             </g>
         </g>
     </g>
     </svg>`,
                tooltip: true,
                // withText: true
            });
            /* navigator.clipboard.readText()
                    .then(clipboardData => {
                        const copiedText = clipboardData
                        // view.isEnabled = Boolean(!copiedText)
                        console.log(copiedText,"copy");
                        
                    }) */
            
 
            view.on('execute', () => {
 
                const selObj = window.getSelection()?.toString();
                let pasteText = document.getElementById('pasteButton');
                if (pasteText) {
                    pasteText.click();
                    console.log('paste clicked ', selObj);
                }
            });
            // editor.model.document.on("selectionChange",updateButtonState);
            // updateButtonState();
 
            return view;
        });
    }
}

class AddSectionButtonPlugin extends Plugin {
	isCollapsed = false;
	arr = [];
	init() {
        const editor = this.editor;

        editor.ui.componentFactory.add( 'addsection', (locale) => {
			// The button will be an instance of ButtonView.
			const view = new ButtonView(locale);

			view.set( {
				label: 'Add Section',
                // /icon: `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>`,
				tooltip: true,
                withText: true,
				// class: 'insertTabsCkEditor'
			} );

			//Execute a callback function when the button is clicked
			view.on( 'execute', () => {
				editor.model.change( writer => {
					/* console.log("root ", editor.model.document.getRoot())
					console.log("blocks ", editor.model.document.selection.getSelectedBlocks())
					console.log("selction ", window.getSelection()); */
					let pop_up_button = document.getElementById('addSection_Editor');
					if (pop_up_button) {
					pop_up_button.click();
					// popValue = sessionStorage.getItem('population_selectedCategory');
				}
			} );
			editor.model.schema.register('sectionTitle', {
				inheritAllFrom: '$block',
				allowAttributes: ['id', 'customtag','contenteditable']
			})
			editor.conversion.elementToElement({model: 'sectionTitle', view: 'sectionTitle'});
        editor.conversion.attributeToAttribute({model: 'id', view: 'id'});
        editor.conversion.attributeToAttribute({model: 'customtag', view: 'customtag'});
        
        editor.data.set('<p><sectionTitle id="idA">wordA</sectionTitle> lotem ipsum <sectionTitle id="idB">wordB</sectionTitle></p>');
			/* const docFrag = editor.model.change( writer => {
				const p1 = writer.createElement( 'paragraph' );
				const p2 = writer.createElement( 'heading' );
				p2._setAttribute('level', 3);
				p1._setAttribute('hidden', true);
				const docFrag = writer.createDocumentFragment();
				// const p3 = writer.createElement( 'paragraph' );
				// const blockQuote = writer.createElement( 'blockQuote' );
				const selection = window.getSelection()?.toString();
				console.log("selction string ", selection);
				const arr = selection?.split("\n");
				// const head = arr?[0]:
				// const desc = arr?[1].toString();
				// const population = sessionStorage.getItem('population_selectedCategory');
				writer.append( p1, docFrag );
				writer.append( p2, docFrag );
				writer.insertText( "head", p2);
				// writer.insertText(population, p3);
				writer.insertText("desc", p1);
				return docFrag;
			} ); */
					// editor.model.insertContent( writer.insert( paragraph, position ) );
					// editor.model.insertContent( docFrag );
					
					
				
			} );

			return view;
		} );
		
    }
}

class RegisterCustomTagsPlugin extends Plugin {
	init() {
        const editor = this.editor;
		editor.model.schema.extend("paragraph", {
			allowAttributes: "id"
		});
		/* editor.model.schema.extend("span", {
			allowAttributes: "id"
		});
		editor.model.schema.extend("a", {
			allowAttributes: "id"
		}); */
		editor.model.schema.register('sectionTitle', {
			inheritAllFrom: '$block',
			allowAttributes: ['id', 'customtag','contenteditable','class']
		})
		editor.conversion.elementToElement({model: 'sectionTitle', view: 'sectionTitle'});
		editor.conversion.attributeToAttribute({model: 'id', view: 'id'});
		editor.conversion.attributeToAttribute({model: 'customtag', view: 'customtag'});
		/** For Public Link */
		editor.model.schema.register('publicLink', {
			// inheritAllFrom: '$block',
			allowAttributes: ['id', 'customtag','contenteditable', 'class'],
			allowIn: 'paragraph, anchor'
		})
		editor.conversion.elementToElement({model: 'publicLink', view: 'publicLink'});
		editor.conversion.attributeToAttribute({model: 'id', view: 'id'});
		editor.conversion.attributeToAttribute({model: 'customtag', view: 'customtag'});
		/** For Intranet Link */
		editor.model.schema.register('intranetLink', {
			// inheritAllFrom: '$block',
			allowAttributes: ['id', 'customtag','contenteditable', 'class'],
			allowIn: 'paragraph, anchor'
		})
		editor.conversion.elementToElement({model: 'intranetLink', view: 'intranetLink'});
		editor.conversion.attributeToAttribute({model: 'id', view: 'id'});
		editor.conversion.attributeToAttribute({model: 'customtag', view: 'customtag'});
		/** For Predefine Link */
		editor.model.schema.register('predefineLink', {
			// inheritAllFrom: '$block',
			allowAttributes: ['id', 'customtag','contenteditable', 'class'],
			allowIn: 'paragraph, anchor'
		})
		editor.conversion.elementToElement({model: 'predefineLink', view: 'predefineLink'});
		editor.conversion.attributeToAttribute({model: 'id', view: 'id'});
		editor.conversion.attributeToAttribute({model: 'customtag', view: 'customtag'});
		/** For Population */
		editor.model.schema.register('populationStart', {
			// inheritAllFrom: '$block',
			allowAttributes: ['id', 'customtag','contenteditable', 'class'],
			isObject: true,
			allowIn: 'paragraph'

		})
		editor.conversion.elementToElement({model: 'populationStart', view: 'populationStart'});
		editor.conversion.attributeToAttribute({model: 'id', view: 'id'});
		editor.conversion.attributeToAttribute({model: 'customtag', view: 'customtag'});

		editor.model.schema.register('populationEnd', {
			// inheritAllFrom: '$block',
			allowAttributes: ['id', 'customtag','contenteditable', 'class'],
			isObject: true,
			allowIn: 'paragraph'
		})
		editor.conversion.elementToElement({model: 'populationEnd', view: 'populationEnd'});
		editor.conversion.attributeToAttribute({model: 'id', view: 'id'});
		editor.conversion.attributeToAttribute({model: 'customtag', view: 'customtag'});
		
		editor.model.schema.register('innerTextPop', {
			// inheritAllFrom: '$block',
			allowAttributes: ['id', 'customtag','contenteditable', 'class'],
			isObject: true,
			allowIn: 'paragraph'
		})
		editor.conversion.elementToElement({model: 'innerTextPop', view: 'innerTextPop'});
		editor.conversion.attributeToAttribute({model: 'id', view: 'id'});
		editor.conversion.attributeToAttribute({model: 'customtag', view: 'customtag'});
		
		
    }
}


/** Adding customs plugin  */

class Editor extends ClassicEditor {
	public static override builtinPlugins = [
		Alignment,
		Autoformat,
		BlockQuote,
		Bold,
		Essentials,
		Subscript,
		Strikethrough,
		Superscript,
		FindAndReplace,
		GeneralHtmlSupport,
		Heading,
		Image,
		ImageCaption,
		ImageStyle,
		ImageToolbar,
		ImageUpload,
		ImageInsert,
		ImageResize,
		Indent,
		IndentBlock,
		Italic,
		Link,
		List,
		Paragraph,
		PasteFromOffice,
		RemoveFormat,
		Style,
		Table,
		TableCellProperties,
		TableProperties,
		TableToolbar,
		TextTransformation,
		InsertPopulationButtonPlugin,
		// InsertImage,
		// Abbreviation,
		LinkButtonPlugin,
		UnLinkButtonPlugin,
		TabsButton,
		RemovePopulationButtonPlugin,
		UploadImagePlugin,
		Copy,
		Paste,
		AddSectionButtonPlugin,
		RegisterCustomTagsPlugin,
	];

	public static override defaultConfig = {
		toolbar: {
			items: [
				'heading',
				'|',
				'bold',
				'italic',
				'bulletedList',
				'numberedList',
				'|',
				'outdent',
				'indent',
				'removeFormat',
				'imageUpload',
				'link',
				'blockQuote',
				'insertTable',
				'undo',
				'redo',
				'-',
				'style',
				'alignment',
				'findAndReplace',
				'-',
				'links',
				'unlinks',
				'addtabs',
				'addPopulation',
				'removePopulation',
				'uploadImage',
				'copy',
				'paste',
				'addsection',
				'fontColor',
				'highlight'
			],
			shouldNotGroupWhenFull: true
		},
		language: 'en',
		image: {
			toolbar: [
				'imageTextAlternative',
				'toggleImageCaption',
				'imageStyle:inline',
				'imageStyle:block',
				'imageStyle:side'
			]
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells'
			]
		},
		fontColor: {
			colors: [
			  {
				color: 'hsl(120, 75%, 60%)',
				label: 'Green'
			  },
			]
		},
		indentBlock: {
            offset: 1,
            unit: 'em'
        }
	};
}

export default Editor;
