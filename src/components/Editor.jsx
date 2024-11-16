import React, { useEffect } from 'react'
import 'codemirror/theme/dracula.css';
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/closebrackets'
import CodeMirror from 'codemirror';

const Editor = () => {
    async function init(){
        CodeMirror.fromTextArea(document.getElementById('codeEditorArea'),{
            mode:{name:'javascript', json:true},
            theme:'dracula',
            autoCloseTags:true,
            autoCloseBrackets:true,
            lineNumbers:true,
            
        });
    }

    useEffect(()=>{
        init();
    },[]);

    return (
        <textarea id="codeEditorArea"/>
    )
}

export default Editor
