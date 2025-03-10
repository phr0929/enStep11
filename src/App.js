import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{width:'100vw',height:'100vh'}}>
      
      <div style={{display:'flex',flexDirection:'row',width:'100%',height:70}}>
        <div style={{width:100,}}>로고</div>
        <div style={{display:'flex',flexDirection:'row',width:'calc(100% - 200px)',}}>
          <div>1호</div>
          <div>2호</div>          
          <div>3호</div>
        </div>
        <div style={{width:100}}>
          STEP1
        </div>
      </div>

      <div style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'center'}}>
        <div style={{display:'flex',flexDirection:'row',width:'60%',height:50}}>
          <div style={{width:'25%'}}>월요일</div>          
          <div style={{width:'25%'}}>화요일</div>          
          <div style={{width:'25%'}}>수요일</div>
          <div style={{width:'25%'}}>목요일</div>
          <div style={{width:'25%'}}>금요일</div>
        </div>
      </div>


      <div style={{display:'flex',flexDirection:'row',width:'100%',height:'calc(100% - 120px)',}}>

        <div style={{display:'flex',flexDirection:'column',width:'20%',height:'80%'}}>
          <div style={{height:'calc(100% - 10px)',marginTop:5,marginBottom:5,display:'flex',alignItems:'center',justifyContent:'center'}}>1주차</div>          
          <div style={{height:'calc(100% - 10px)',marginTop:5,marginBottom:5,display:'flex',alignItems:'center',justifyContent:'center'}}>2주차</div>          
          <div style={{height:'calc(100% - 10px)',marginTop:5,marginBottom:5,display:'flex',alignItems:'center',justifyContent:'center'}}>3주차</div>
          <div style={{height:'calc(100% - 10px)',marginTop:5,marginBottom:5,display:'flex',alignItems:'center',justifyContent:'center'}}>4주차</div>
        </div>

        <div style={{display:'flex',flexDirection:'column',width:'60%',height:'80%',backgroundColor:'#ff00ff'}}>
          <div style={{display:'flex',flexDirection:'row',width:'100%',height:'20%'}}>
            <div style={{width:'25%',height:'calc(100% - 10px)',marginTop:5,marginBottom:5,backgroundColor:'#ff0000',}}>화요일</div>
            <div style={{width:'25%',height:'calc(100% - 10px)',marginTop:5,marginBottom:5,backgroundColor:'#ff0000',}}>월요일</div>
            <div style={{width:'25%',height:'calc(100% - 10px)',marginTop:5,marginBottom:5,backgroundColor:'#ff0000',}}>수요일</div>
            <div style={{width:'25%',height:'calc(100% - 10px)',marginTop:5,marginBottom:5,backgroundColor:'#ff0000',}}>목요일</div>
            <div style={{width:'25%',height:'calc(100% - 10px)',marginTop:5,marginBottom:5,backgroundColor:'#ff0000',}}>금요일</div>
          </div>
          <div style={{display:'flex',flexDirection:'row',width:'100%',height:'20%'}}>
            <div style={{width:'25%',height:'calc(100% - 10px)',marginTop:5,marginBottom:5,backgroundColor:'#ff0000',}}>화요일</div>
            <div style={{width:'25%',height:'calc(100% - 10px)',marginTop:5,marginBottom:5,backgroundColor:'#ff0000',}}>월요일</div>
            <div style={{width:'25%',height:'calc(100% - 10px)',marginTop:5,marginBottom:5,backgroundColor:'#ff0000',}}>수요일</div>
            <div style={{width:'25%',height:'calc(100% - 10px)',marginTop:5,marginBottom:5,backgroundColor:'#ff0000',}}>목요일</div>
            <div style={{width:'25%',height:'calc(100% - 10px)',marginTop:5,marginBottom:5,backgroundColor:'#ff0000',}}>금요일</div>
          </div>
          <div style={{display:'flex',flexDirection:'row',width:'100%',height:'20%'}}>
            <div style={{width:'25%',height:'calc(100% - 10px)',marginTop:5,marginBottom:5,backgroundColor:'#ff0000',}}>화요일</div>
            <div style={{width:'25%',height:'calc(100% - 10px)',marginTop:5,marginBottom:5,backgroundColor:'#ff0000',}}>월요일</div>
            <div style={{width:'25%',height:'calc(100% - 10px)',marginTop:5,marginBottom:5,backgroundColor:'#ff0000',}}>수요일</div>
            <div style={{width:'25%',height:'calc(100% - 10px)',marginTop:5,marginBottom:5,backgroundColor:'#ff0000',}}>목요일</div>
            <div style={{width:'25%',height:'calc(100% - 10px)',marginTop:5,marginBottom:5,backgroundColor:'#ff0000',}}>금요일</div>
          </div>
          <div style={{display:'flex',flexDirection:'row',width:'100%',height:'20%'}}>
            <div style={{width:'25%',height:'calc(100% - 10px)',marginTop:5,marginBottom:5,backgroundColor:'#ff0000',}}>화요일</div>
            <div style={{width:'25%',height:'calc(100% - 10px)',marginTop:5,marginBottom:5,backgroundColor:'#ff0000',}}>월요일</div>
            <div style={{width:'25%',height:'calc(100% - 10px)',marginTop:5,marginBottom:5,backgroundColor:'#ff0000',}}>수요일</div>
            <div style={{width:'25%',height:'calc(100% - 10px)',marginTop:5,marginBottom:5,backgroundColor:'#ff0000',}}>목요일</div>
            <div style={{width:'25%',height:'calc(100% - 10px)',marginTop:5,marginBottom:5,backgroundColor:'#ff0000',}}>금요일</div>
          </div>
        </div>

        <div style={{display:'flex',flexDirection:'column',width:'20%'}}>
          <div>
            <div>Story Song</div>            
            <div>Talking Box Chant</div>
          </div>
          <div>
            <div>Talking Box</div>
            <div>Workbook</div>
            <div>Flashcards</div>
            <div>Keywords</div>
          </div>
          <div>
            <div>
              Phonics
            </div>            
            <div>
              Elliivy Song
            </div>
          </div>
          <div>
            강사용
          </div> 
        </div>
      </div>


    </div>
  );
}

export default App;
