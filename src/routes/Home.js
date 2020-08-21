import React from 'react';
import axios from 'axios';
import Movie from '../component/Movie';
import './Home.css';


class Home extends React.Component {
  //react.component 클래스를 상속받음
  state = {
    isLoading : true,
    /*isLoading : 앱 데이터 로딩하면 영화 앱 데이터가 있어야함. 
    그런 상태를 구분해줄 변수가 isLoading ,state가 마운트 되면 true여야함.*/
    movies : [] 
    //로딩된 영화 데이터 저장
  };
  getMovies = async () => {
    //async : 시간이 필요해(비동기)
    const {
      data : { //movies.data
        data : {movies} //movies.data.data.movies
      }
    } = await axios.get(`https://yts.mx/api/v2/list_movies.json?sort_by=rating`);
    //await : 그러니까 기다려!
    this.setState({movies,isLoading:false}); //{state : 구조분해할당으로 얻은 movies} -> 이름이 같아서 축약.
  }


  componentDidMount() { //영화데이터 로딩
    this.getMovies();
  }

  render(){
    const { isLoading, movies } = this.state; 
    //구조분해할당으로 this.state에 있는 isLoaindg을 얻으면 항상 this.state를 입력하지 않아도 됨.
    
    return (<section className="container">
      {isLoading ? (<div className="loader"><span className="loader_text">'Loading...'</span></div>): (<div className="movies">{movies.map((movie)=> (
          <Movie 
          key={movie.id} //컴포넌트를 여러 개 출력할 때는 유일한 값을 이용해 key props를 추가해야함(중요)
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
          genres={movie.genres}
          />
          ))}
        </div>
      )}
    </section>
  );  
  }
}

export default Home;
