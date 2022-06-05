import React from 'react';
import { useState  } from 'react';
import './App.css';
import Section from './components/Section/Section';
import  Statistics  from './components/Statistics/Statistics';
import {FeedbackOptions} from './components/FeedbackOptions/FeedbackOptions';
import {Notification} from './components/Notification/Notification';

/*class App extends React.Component {
  constructor() {
    super();
   
  this.state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

}

 

countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  
  return good + neutral +  bad;
  
}

countPositiveFeedbackPercentage = () => {
  const res = this.countTotalFeedback();
		const { good } = this.state;
		const percentage = (good * 100) / res;
		return Math.round(percentage);
};

onLeaveFeedback = (e) => {
  const value = e.target.value;
  this.setState((prevState) => ({
    [value]: prevState[value] + 1
  }));
};

  render() { 
    const { good, neutral, bad } = this.state;
		const total = this.countTotalFeedback();
		const positivePercentage = this.countPositiveFeedbackPercentage();

    const objKey = Object.keys(this.state);
  return (
    <div className="App">
       <Section title="Будь ласка, залиште відгук">
					<FeedbackOptions  options={objKey} onLeaveFeedback={this.onLeaveFeedback} />
				</Section>

				{total === 0 ? (
					<Notification message="немає відгуків" />
				) : (
					<Section title="Статистика">
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={total}
							positivePercentage={positivePercentage}
						/>
					</Section>
				)}
    </div>
    
  );
}
}

export default App;*/

/* На хуках */

 

function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  

  const countTotalFeedback = () => {     
    
    return good + neutral +  bad;
    
  };

  const countPositiveFeedbackPercentage = () => {
    const res = countTotalFeedback();
       
      const percentage = (good * 100) / res;
      return Math.round(percentage);
  };
  

  const onLeaveFeedback = (option) => {
     

    if (option === 'good') {
      return setGood(prevState => prevState + 1);
    }

    if (option === 'neutral') {
      return setNeutral(prevState => prevState + 1);
    }

    if (option === 'bad') {
      return setBad(prevState => prevState + 1);
    }
     

  };

  const total = countTotalFeedback();
		const positivePercentage = countPositiveFeedbackPercentage();

    

    return (
      <div className="App">
       <Section title="Будь ласка, залиште відгук">
					<FeedbackOptions  options={['good', 'neutral', 'bad']}  onLeaveFeedback={onLeaveFeedback} />
				</Section>

				{total === 0 ? (
					<Notification message="немає відгуків" />
				) : (
					<Section title="Статистика">
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={total}
							positivePercentage={positivePercentage}
						/>
					</Section>
				)}
    </div>
    )
}

export default App;
