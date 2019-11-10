import React from 'react';
import YouTube from "react-youtube";

class DebugTitle extends React.Component {
	render(){
		return (
			<div className="DebugTitle">
				<p>{this.props.title}</p>
			</div>
		);
	}
}

class Topbar extends React.Component {
	render() {
		return (
			<div className="Topbar">
				<DebugTitle title="Topbar" />
				<Navigation f={this.props.f}/>
				<Wallet />
			</div>
		);
	}
}

class Navigation extends React.Component {
	render() {
		return (
			<div className="Navigation">
				<DebugTitle title="Navigation" />
				<NavButton name="Home" f={this.props.f}/>
				<NavButton name="Courses" f={this.props.f}/>
				<NavButton name="Redeem" f={this.props.f}/>
			</div>
		);
	}
}

class NavButton extends React.Component {
	render() {
		return (
			<div className="NavButton">
				<DebugTitle title="NavButton" />
				<button onClick={() => this.props.f.loadContentComponent("CourseListContent", [])}>{this.props.name}</button>
			</div>
		);
	}
}

class Wallet extends React.Component {
	render() {
		return (
			<div className="Wallet">
				<DebugTitle title="Wallet" />
			</div>
		);
	}
}

class BountyDisplay extends React.Component {
	render () {
		return (
			<div className="BountyDisplay">
				<DebugTitle title="BountyDisplay" />
				<h1>{this.props.value}</h1>
				<p>{this.props.symbol}</p>
			</div>
		);
	}
}

class Summary extends React.Component {
	render() {
		return (
			<div className="Summary">
				<div className="description">
					<div className="title">
						<h1>{this.props.name}</h1>
					</div>
					<p>{this.props.description}</p>
				</div>
				<BountyDisplay value={this.props.bounty} symbol="BT"/>
			</div>
		);
	}
}

class Content extends React.Component {
	render() {
		const test = {
		  id: "akjj21",
		  name: "Do you know how to cook chicken?",
		  bounty: "1000",
		  questions: [
		    {
		      id: "a",
		      name: "Cooking Question",
		      text: "How long should you boil chicken?",
		      responses: [
		        {id: "aa", text: "You never boil chicken you monster!", correct: true},
				{id: "oaskdia", text: "10 mins", correct: false},
		      ]
		  },
		  {
			id: "b",
			name: "math question IMPORTANT!!",
			text: "whats 9 + 10?",
			responses: [
			  {id: "aab", text: "21", correct: true},
			  {id: "sks", text: "19", correct: false},
			]
		  }
		  ]
		}
		const video = {
		  id: "integer (int64)",
		  category: {
			id: "integer (int64)",
			name: "string"
		  },
		  name: "25 Chicken Recipes",
		  description: "Nice.",
		  thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1e/A_blank_black_picture.jpg",
		  length: "integer (int64)",
		  youtubeId: "jPOxWOE-3Xk",
		  bounty: 20,
		  tests: [
			test,
			test
		  ]
	  };
		const course = {
				imageUrl: "https://ethwaterloo.com/src/assets/images/ETHGlobal-logo.svg",
				description: "The best course.",
			    id: "integer (int64)",
			    category: {
			      id: "integer (int64)",
			      name: "string"
			    },
			    name: "Cooking 101",
			    "total-bounty": 100,
				"bonus-bounty": 10,
			    videos: [
			      video,
				  video,
				  video
			    ]
			}
		var content;
		switch (this.props.component) {
			case "TestContent":
				content = <TestContent test={this.props.state.test} f={this.props.f}/>;
				break;
			case "VideoContent":
				content = <VideoContent video={this.props.state.video} f={this.props.f}/>;
				break;
			case "CourseContent":
				content = <CourseContent course={this.props.state.course} f={this.props.f}/>;
				break;
			default:
				content = <CourseListContent f={this.props.f} courses={this.props.state.courses}/>;
				break;
		}
		return (
			<div className="Content">
				<DebugTitle title="Content" />
				{content}
			</div>
		);
	}
}

// Course List

class CourseListContent extends React.Component {
	render() {
		return (
			<div className="CourseListContent">
				<DebugTitle title="CourseListContent" />
				<Filterbar f={this.props.f} />
				<CourseList f={this.props.f} courses={this.props.courses}/>
			</div>
		);
	}
}

class Filterbar extends React.Component {
	render() {
		return (
			<div className="Filterbar">
				<DebugTitle title="Filterbar" />
				<NavButton name="My Courses" f={this.props.f}/>
				<NavButton name="Discover" f={this.props.f}/>
				<Search />
			</div>
		);
	}
}

class Search extends React.Component {
	render() {
		return (
			<div className="Search">
				<DebugTitle title="Search" />
				<input type="text" name="fname" />
			</div>
		);
	}
}

class CourseList extends React.Component {
	render() {
		const courses = this.props.courses.map(c => <CoursePreview course={c} f={this.props.f} />);
		return (
			<div className="CourseList">
				<DebugTitle title="CourseList" />
				{courses}
			</div>
		);
	}
}

// Course

class CoursePreview extends React.Component {
	render() {
		const loadCourse = () => {
			this.props.f.loadContentComponent("CourseContent", []);
			this.props.f.setState({course: this.props.course});
		}
		return (
			<div className="CoursePreview">
			<DebugTitle title="CoursePreview" />
				<img src={this.props.course["thumbnailUrl"]} />
				<div class="desc">
					<div class="title">
						<h1 onClick={loadCourse}>{this.props.course.name}</h1>
					</div>
					<p>{this.props.course.description}</p>
				</div>
				<BountyDisplay value={this.props.course.totalBounty} symbol="BT" />
			</div>
		);
	}
}

class CourseContent extends React.Component {
	render() {
		return (
			<div className="CourseContent">
				<DebugTitle title="CourseContent" />
				<CourseSummary course={this.props.course} />
				<CourseSyllabus course={this.props.course} f={this.props.f} />
			</div>
		);
	}
}

class CourseSummary extends React.Component {
	render() {
		return (
			<div className="CourseSummary">
				<Summary name={this.props.course.name} description={this.props.course.description} bounty={this.props.course["totalBounty"]} />
			</div>
		);
	}
}

class CourseSyllabus extends React.Component {
	render() {
		const videos
			= this.props.course.videos.map(v => (<VideoPreview video={v} f={this.props.f} />));
		return (
			<div className="CourseSyllabus">
				<DebugTitle title="CourseSyllabus" />
				{videos}
			</div>
		);
	}
}

// Video

class VideoPreview extends React.Component {
	render() {
		const tests = this.props.video.tests.map(t => (<TestPreview test={t} f={this.props.f} />));

		const loadVideo = () => {
			this.props.f.loadContentComponent("VideoContent", []);
			this.props.f.setState({video: this.props.video});
		}

		var testList = (
			<div className="tests">
				<h2>Bonus Challenges</h2>
				{tests}
			</div>
		);

		if (this.props.video.tests.length <= 0) {
			testList = [];
		}

		return (
			<div className="VideoPreview">
				<DebugTitle title="VideoPreview" />
				<div className="info">
					<div>
						<img src={this.props.video.thumbnailUrl} />
						<div className="description">
							<h1 onClick={loadVideo}>{this.props.video.name}</h1>
							<p>{this.props.video.description}</p>
						</div>
					</div>
					<BountyDisplay value={this.props.video.bounty} symbol="BT" />
				</div>
				{testList}
			</div>
		);
	}
}

class VideoContent extends React.Component {
	render() {
		const tests = this.props.video.tests.map(t => (<TestPreview test={t} f={this.props.f} />));
		var testList = (
			<div className="tests">
				<h2>Bonus Challenges</h2>
				{tests}
			</div>
		);

		if (this.props.video.tests.length <= 0) {
			testList = [];
		}

		return (
			<div className="VideoContent">
				<Summary name={this.props.video.name} description={this.props.video.description} bounty={this.props.video.bounty} />
				<Video video={this.props.video} f={this.props.f}/>
				{testList}
			</div>
		);
	}
}

class Video extends React.Component {
	render() {
		const OnEnd = () => {
			const payout = this.props.video.bounty;
			this.props.f.mint(payout);

		}
		return (
			<div className="Video">
				<YouTube videoId={this.props.video.youtubeId} onEnd={OnEnd} />
			</div>
		);
	}
}

// Test

class TestPreview extends React.Component {
	render() {
		const loadTest = () => {
			this.props.f.loadContentComponent("TestContent", []);
			this.props.f.setState({test: this.props.test});
		}
		return (
			<div className="TestPreview">
				<h2 onClick={loadTest}>{this.props.test.name}</h2>
				<BountyDisplay value={this.props.test.bounty} symbol="BT" />
			</div>
		);
	}
}

class TestContent extends React.Component {
	render() {
		const questions = this.props.test.questions.map(q => <Question question={q} />)
		return (
			<div className="TestContent">
				<Summary name={this.props.test.name} description="" bounty={this.props.test.bounty} />
				{questions}
				<br /> <br />
				<TestSubmit test={this.props.test} f={this.props.f}/>
			</div>
		);
	}
}

class Question extends React.Component {
	render() {
		const responses = this.props.question.responses.map(r => <Response question={this.props.question} response={r}/>);
		return (
			<div className="Question">
				<h2>{this.props.question.text}</h2>
				{responses}
			</div>
		);
	}
}

class Response extends React.Component {
	render() {
		return (
			<div className="Response">
				<input type="radio" id={this.props.response.id} name={this.props.question.id} />
				<label for={this.props.response.id}>{this.props.response.name}</label>
			</div>
		);
	}
}

class TestSubmit extends React.Component {
	render() {
		const pay = () => {
			const payout = this.props.test.bounty;
			this.props.f.mint(payout);
		}
		return (
			<div className="TestSubmit">
				<button onClick={pay}>Submit</button>
			</div>
		);
	}
}




export {Topbar, Content};
