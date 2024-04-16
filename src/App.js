import React, { useState } from 'react';
import './index.css';
import { BiAlignLeft, BiAlignRight } from 'react-icons/bi';
import { FaAlignCenter } from 'react-icons/fa';
import { TbFileTypeTxt } from 'react-icons/tb';

function App() {
  const [text, setText] = useState('');
  const [font, setFont] = useState('Arial');
  const [fontsize, setfontSize]= useState('16');
  const [fontColor,setColor]=useState('white');
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleAlignRight = () => {
    const textarea = document.getElementById('editor');
    textarea.style.textAlign = 'right';
  };
  const handleAlignLeft = () => {
    const textarea = document.getElementById('editor');
    textarea.style.textAlign = 'left';
  };

  const handleAlignCenter = () => {
    const textarea = document.getElementById('editor');
    textarea.style.textAlign = 'center';
  };

  const handleFontChange = (event) => {
    setFont(event.target.value);
    const textarea = document.getElementById('editor');
    textarea.style.fontFamily = event.target.value;
  };
  const handleSize=(event)=>{
    setfontSize(event.target.value);
    const textarea=document.getElementById('editor');
    textarea.style.fontSize=event.target.value + 'px';
  }

  const handleColor=(e)=>{
    setColor(e.target.value);
    const textarea=document.getElementById('editor');
    textarea.style.color=e.target.value;
  }

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'arquivo.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  return (
    <div className="editor-container">
      <div className="toolbar">
      <select value={font} onChange={handleFontChange}>
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Tahoma">Tahoma</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Georgia">Georgia</option>
        </select>
        <select value={fontsize} onChange={handleSize}>
          <option value='8'>8</option>
          <option value='10'>10</option>
          <option value='11'>11</option>
          <option value='12'>12</option>
          <option value='13'>13</option>
          <option value='14'>14</option>
          <option value='15'>15</option>
          <option value='16'>16</option>
          <option value='17'>17</option>
          <option value='18'>18</option>
          <option value='19'>19</option>
          <option value='20'>20</option>
        </select>
        <select value={fontColor} onChange={handleColor}>
          <option value='white'>white</option>
          <option value='black'>black</option>
          <option value='gray'>gray</option>
          <option value='blue'>blue</option>
          <option value='aqua'>aqua</option>
          <option value='lime'>lime</option>
          <option value='fuchsia'>fuchsia</option>
          <option value='maroon'>maroon</option>
          <option value='green'>green</option>
          <option value='red'>red</option>
          <option value='purple'>purple</option>

        </select>
        <button onClick={handleAlignRight}><BiAlignRight /></button>
        <button onClick={handleAlignCenter}><FaAlignCenter  size={'1.5rem'}/></button>
        <button onClick={handleAlignLeft}><BiAlignLeft  size={'1.5rem'}/></button>
        <button onClick={handleDownload}>Baixar <TbFileTypeTxt  size={'1.5rem'}/></button>
      </div>
      <div className="editor">
        <textarea
          id="editor"
          value={text}
          onChange={handleTextChange}
          placeholder="Digite seu texto aqui..."
        />
      </div>
    </div>
  );
}

export default App;
