import React from 'react';
import '../routes/Detail.css';

class Detail extends React.Component {
    componentDidMount() { //detail 컴포넌트가 마운트 되면
        const {location, history} = this.props; //구조분해 할당으로 location, history를 얻음.
        if(location.state === undefined){
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if(location.state){
            return (
            <div className="detail_container">
                <img src={location.state.poster} alt={location.state.title}></img>
                <h4>{location.state.title}</h4>
                <h5>{location.state.year}</h5>
                <ul className="detail_genres">
                    {location.state.genres.map((genre,index)=>{
                        return <li key={index} className="detail_genres">{genre}</li>;
                    })}
                </ul>
                <span>{location.state.summary}</span>

            </div>
            );
        }else{
            return null;
        }
    }
}

export default Detail;