import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import './GreetingsCard.css';

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <div className="page-image"></div>
        <div className="page-text"><h2>{props.children}</h2></div>
      </div>
    </div>
  );
});

class GreetingsCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      totalPage: 0,
    };
  }

  nextButtonClick = () => {
    if (this.flipBook) {
      this.flipBook.getPageFlip().flipNext();
    }
  };

  prevButtonClick = () => {
    if (this.flipBook) {
      this.flipBook.getPageFlip().flipPrev();
    }
  };

  onPage = (e) => {
    this.setState({
      page: e.data,
    });
  };

  componentDidMount() {
    if (this.flipBook) {
      if (this.flipBook.getPageFlip) {
        this.setState({
          totalPage: this.flipBook.getPageFlip().getPageCount(),
        });
      }
    }
  }

  render() {
    const { greeting, designed_by } = this.props;

    return (
      <div>
        <HTMLFlipBook
          width={550}
          height={733}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={this.onPage}
          onChangeOrientation={this.onChangeOrientation}
          onChangeState={this.onChangeState}
          className="demo-book"
          ref={(el) => (this.flipBook = el)}
        >
          <PageCover>
            <img src="/fathers_day.png" alt="Cover" className="cover-image" />
          </PageCover>

          <Page>
            <p/>
          </Page>

          <Page>
            <div className="greeting">
              {greeting.split('\n').map((line, index) => (
                <p key={index}>
                  {line.trim() === '' ? <>&nbsp;</> : line}
                </p>
              ))}
            </div>
          </Page>

          <PageCover>
              {designed_by.split('\n').map((line, index) => (
                <p key={index}>
                  {line.trim() === '' ? <>&nbsp;</> : line}
                </p>
              ))}
          </PageCover>
        </HTMLFlipBook>
      </div>
    );
  }
}

export default GreetingsCard;

