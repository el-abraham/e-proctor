import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TxtEditor = () => {

    return (
        <ReactQuill theme="snow"/>
    )
}

export default TxtEditor;

// export default () => {
//     const { quill, quillRef } = useQuill();
  
//     React.useEffect(() => {
//       if (quill) {
//         quill.on('text-change', (delta, oldDelta, source) => {
//           console.log('Text change!');
//           console.log(quill.getText()); // Get text only
//           console.log(quill.getContents()); // Get delta contents
//           console.log(quill.root.innerHTML); // Get innerHTML using quill
//           console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
//         });
//       }
//     }, [quill]);
  
//     return (
//       <div style={{ width: 500, height: 300 }}>
//         <div ref={quillRef} />
//       </div>
//     );
//   };