import React, { Component } from "react";
 // eslint-disable-next-line
import ReactDom from "react-dom";
import Card from './Card'
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=IN&apiKey=efe521c72773493abe336562cdfe2493"
    )
      .then((response) => {
        return response.json();
      })
      .then((myData) => {
        this.setState({
          articles: myData.articles,
        });
      });
  }
 

  render() {
    return (
      <div>
          {this.state.articles.map((items)=>{
              return (
                  <Card
                      image={items.urlToImage}
                      title={items.title}
                      description={items.description}
          url={items.url} />
              )
          })}
          
      </div>
    );
  }
}
export default Dashboard;
