import React from 'react';

class DebugTitle extends React.Component {
	render(){
		return (
			<div className="DebugTitle">
				<p>{this.props.title}</p>
			</div>
		);
	}
}

class Sidebar extends React.Component {
	render() {
		return (
			<div className="Sidebar">
				<DebugTitle title="Sidebar" />
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

class Content extends React.Component {
	render() {
		return (
			<div className="Content">
				<DebugTitle title="Content" />
				<CourseContent />
			</div>
		);
	}
}

class CourseContent extends React.Component {
	render() {
		return (
			<div className="CourseContent">
				<DebugTitle title="CourseContent" />
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
			bounty: "25 BT"
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
				<div class="bounty">
					<h1>{this.props.data.bounty}</h1>
				</div>
			</div>
		);
	}
}

export {Sidebar, Content};
