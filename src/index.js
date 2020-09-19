import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
          <h1 className="header__title">
              Ты сегодня покормил кота?
              </h1>
      </header>
    )
  }
}

class CardWeight extends React.Component {
  render() {
    return (
      <div className='card__weight'>
        {this.props.weigth}
        <div className="card__weight-unit">
          {this.props.measure}
        </div>
      </div>
    )
  }
}

class CardHeader extends React.Component {
  render() {
    return (
      <div className="card__header">
        <div className='card__header-title'>
          {this.props.header}
        </div>
      </div>
    )
  }
}

class CardContent extends React.Component {
  render() {
    return (
      <div className='card__content'>
        <div className="card__info">
          <div className="card__title">
            {this.props.title}
            <div className="card__title-info">
              {this.props.taste}
            </div>
          </div>
          {
            this.props.description.map((text) =>
              <div key={text}>{text}</div>
          )}
        </div>
      </div>
      )
    }
}

class CardFooter extends React.Component {
  render() {
    const cardFooter = `card__footer 
      ${this.props.isDisabled ? "card__footer--disabled" : ""}`;
    let content;
    if (this.props.isSelected) {
      content = <div className={cardFooter}>
        <span>Головы щучьи с чесноком да свежайщая семгушка.</span>
      </div>
    } else if (this.props.isDisabled) {
      content = <div className={cardFooter}>
        <span>Печалька, с курочкой закончился</span>
      </div>
    } else {
      content = <div className={cardFooter}>
        <span>Чего сидишь? Порайдуй котэ,&nbsp;</span>
        <a onClick={this.props.onClick} className="btn__buy" href="/">купи.</a>
      </div>
    }
    return (content)
  }
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isSelected: false,
    };
    this.selectCard = this.selectCard.bind(this);
  }

  selectCard(e) {
    e.preventDefault();
    if (this.props.isDisabled) {
      return
    }
    this.setState((state) => ({
      isSelected: !state.isSelected,
    }));
  }

  render() {
    const card = `card ${this.state.isSelected ? "card--selected" : ""}`;
    return (
      <div className="card__wrapper">
        <div className={card} onClick={this.selectCard}>
          { this.props.isDisabled && <div className="overlay"></div>}
          <CardHeader
            header={this.props.header}
          />
          <CardContent
            title={this.props.title}
            taste={this.props.taste}
            description={this.props.description}
          />
          <CardWeight
            measure={this.props.measure}
            weigth={this.props.weigth}   
          />
        </div>
          <CardFooter
            isDisabled={this.props.isDisabled}
            isSelected={this.state.isSelected}
            onClick={(e) => this.selectCard(e)} 
          />
      </div>
    );
  }
}

class Main extends React.Component {
    render() {
        return (
          <div>
            <Header />
            <main className="main">
              <Card
                header="Сказочное заморское яство"
                isDisabled={false}
                title="Нямушка"
                taste="с фуагра"
                description={['10 порций', 'мышь в подарок']}
                weigth="0,5"
                measure="кг"
                />
              <Card
                header="Сказочное заморское яство"
                isDisabled={false}
                title="Нямушка"
                taste="с рыбой"
                description={['40 порций', '2 мыши в подарок']}
                weigth="2"
                measure="кг"
              />
              <Card
                header="Сказочное заморское яство"
                isDisabled={true}
                title="Нямушка"
                taste="с курой"
                description={['100 порций', '5 мышей в подарок', 'заказчик доволен']}
                weigth="2"
                measure="кг"
              />
            </main>
          </div>
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);