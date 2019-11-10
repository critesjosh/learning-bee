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
				<Navigation />
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
				<NavButton name="Home" />
				<NavButton name="Courses" />
				<NavButton name="Redeem" />
			</div>
		);
	}
}

class NavButton extends React.Component {
	render() {
		return (
			<div className="NavButton">
				<DebugTitle title="NavButton" />
				<button>{this.props.name}</button>
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

class Content extends React.Component {
	render() {
		const test = {
		  id: "integer (int64)",
		  name: "Do you know how to cook chicken?",
		  bounty: 10
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
		return (
			<div className="Content">
				<DebugTitle title="Content" />
				<TestContent test={test} />
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
				<CourseSyllabus course={this.props.course} />
			</div>
		);
	}
}

class CourseSummary extends React.Component {
	render() {
		return (
			<div className="CourseSummary">
				<Summary name={this.props.course.name} description={this.props.course.description} bounty={this.props.course["total-bounty"]} />
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

class CourseSyllabus extends React.Component {
	render() {
		const videos
			= this.props.course.videos.map(v => (<VideoPreview video={v} />));
		return (
			<div className="CourseSyllabus">
				<DebugTitle title="CourseSyllabus" />
				{videos}
			</div>
		);
	}
}

class VideoPreview extends React.Component {
	render() {
		const tests = this.props.video.tests.map(t => (<TestPreview test={t} />));
		return (
			<div className="VideoPreview">
				<DebugTitle title="VideoPreview" />
				<div className="info">
					<div>
						<img src={this.props.video.thumbnailUrl} />
						<div className="description">
							<h1>{this.props.video.name}</h1>
							<p>{this.props.video.description}</p>
						</div>
					</div>
					<BountyDisplay value={this.props.video.bounty} symbol="BT" />
				</div>
				<div className="tests">
					{tests}
				</div>
			</div>
		);
	}
}

class TestPreview extends React.Component {
	render() {
		return (
			<div className="TestPreview">
				<h2>{this.props.test.name}</h2>
				<BountyDisplay value={this.props.test.bounty} symbol="BT" />
			</div>
		);
	}
}

class CourseListContent extends React.Component {
	render() {
		return (
			<div className="CourseListContent">
				<DebugTitle title="CourseListContent" />
				<Filterbar />
				<CourseList />
			</div>
		);
	}
}

class Filterbar extends React.Component {
	render() {
		return (
			<div className="Filterbar">
				<DebugTitle title="Filterbar" />
				<NavButton name="My Courses"/>
				<NavButton name="Discover"/>
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
		const data = {
			imgURL: "https://ethwaterloo.com/src/assets/images/ETHGlobal-logo.svg",
			title: "Intro to Programming",
			description: "Learn straight facts in this amazing course!",
			bounty: 25
		};
		return (
			<div className="CourseList">
				<DebugTitle title="CourseList" />

				<CoursePreview data={data} />
				<CoursePreview data={data} />
				<CoursePreview data={data} />
				<CoursePreview data={data} />
				<CoursePreview data={data} />
				<CoursePreview data={data} />
				<CoursePreview data={data} />
				<CoursePreview data={data} />
				<CoursePreview data={data} />
				<CoursePreview data={data} />
				<CoursePreview data={data} />
				<CoursePreview data={data} />
				<CoursePreview data={data} />
				<CoursePreview data={data} />
				<CoursePreview data={data} />
				<CoursePreview data={data} />
				<CoursePreview data={data} />
			</div>
		);
	}
}

class CoursePreview extends React.Component {
	render() {
		return (
			<div className="CoursePreview">
			<DebugTitle title="CoursePreview" />
				<div class="img">
					<img src={this.props.data.imgURL} />
				</div>
				<div class="desc">
					<div class="title">
						<h1>{this.props.data.title}</h1>
					</div>
					<p>{this.props.data.description}</p>
				</div>
				<BountyDisplay value={this.props.data.bounty} symbol="BT" />
			</div>
		);
	}
}

class VideoContent extends React.Component {
	render() {
		const tests = this.props.video.tests.map(t => (<TestPreview test={t} />));
		return (
			<div className="VideoContent">
				<Summary name={this.props.video.name} description={this.props.video.description} bounty={this.props.video.bounty} />
				<Video video={this.props.video}/>
				<div className="tests">
					{tests}
				</div>
			</div>
		);
	}
}

class Video extends React.Component {
	render() {
		return (
			<div className="Video">
				<YouTube videoId={this.props.video.youtubeId} />
			</div>
		);
	}
}

class TestContent extends React.Component {
	render() {
		return (
			<div className="TestContent">
				<Summary name={this.props.test.name} description="" bounty={this.props.test.bounty} />
			</div>
		);
	}
}

export {Topbar, Content};
