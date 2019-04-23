import React from 'react';
export default class AboutComponent extends React.Component{	
	constructor(props){
		super(props);
		this.handleShowMore = this.handleShowMore.bind(this);
	}
	
	handleShowMore(){
		const app = this;
		app.props.validateLoginTerm();
	}
	
	
	render(){
		let app = this;
		
		return(
			<div className="[ aboutComponent ]">
				<div className = "[ aboutComponent__container ]">
					<div className=" [ col-md-12 ]">
						<div className = "[ aboutColumn ]">
							<h1 className="[ aboutColumn__header ]">About</h1>
							<p id="aboutText">
								First published in 1993 by Wizards of the Coast, Magic was the first trading card game produced and it continues to thrive, with approximately twenty million players as of 2015. Magic can be played by two or more players in various formats, which fall into one of two categories: constructed or limited. Limited formats involve players building a deck spontaneously out of a pool of random cards with a minimum deck size of 40 cards. The other major category of formats is constructed. In constructed, players created decks from cards they own, usually 60 cards with no more than 4 of any given card. Magic is played in person with printed cards, or using a deck of virtual cards through the Internet-based Magic: The Gathering Online, or on a smartphone or tablet, or through other programs.
								<br/><br/>    
								Each game represents a battle between wizards known as "planeswalkers", who employ spells, artifacts, and creatures depicted on individual Magic cards to defeat their opponents. Although the original concept of the game drew heavily from the motifs of traditional fantasy role-playing games such as Dungeons Dragons, the gameplay of Magic bears little similarity to pencil-and-paper adventure games, while having substantially more cards and more complex rules than many other card games.
								<br/><br/>    
								New cards are released on a regular basis through expansion sets. An organized tournament system played at an international level and a worldwide community of professional Magic players has developed, as well as a substantial secondary market for Magic cards. Certain Magic cards can be valuable due to their rarity and utility in game play, with prices ranging from a few cents to thousands of dollars.
							</p>
						</div>
					</div><br/>
					
					<div className="[ col-md-12 ]">
						<div className="[ aboutColumn ]">
							<div className="[ aboutColumn__showMore ]" onClick={app.handleShowMore}>
								<h2 className="[ aboutColumn__header aboutColumn__header--collapsable ]">Defeat your oponent <i className={this.props.chevron + " float-right aboutColumn__chevron"} aria-hidden="true"></i></h2>
								<div style={app.props.showHideContent}>
									<p>
										Each player starts the game with 20 life. Knock your opponent down to 0 life, and you win. The most common way to do this is to summon creatures and attack with them.
										<br/><br/>    
										Creature cards are the most important part of many Magic decks. They’re really easy to spot—just look at the lower right of a card. If you see a pair of numbers separated by a slash, you’ve got a creature card. Once it’s on the battlefield, a creature continues to attack and defend for you until your opponent can find a way to take it out.
										<br/><br/>
										Most games become a race to see who can deal the most damage first. Summoning the best creatures will help you win that race every time. Check out the section on casting creature spells.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}