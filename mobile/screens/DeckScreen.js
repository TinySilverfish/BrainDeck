import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from "../styles/globalStyles";
import { useTheme } from "../theme/ThemeContext";

const mockDecks = [
	// { id: 1, name: "Deck 1", cardCount: 10 },
	// { id: 2, name: "Deck 2", cardCount: 15 },
];

export default function DeckScreen() {
	const decks = mockDecks;
	const { theme } = useTheme();

	return (
		<View style={[globalStyles.container, { backgroundColor: theme.background }]}>
			{decks.length > 0 ? (
				decks.map(deck => (
					<View key={deck.id}>
						<Text style={{ color: theme.text }}>{deck.name}</Text>
						<Text style={{ color: theme.text }}>{deck.cardCount}</Text>
					</View>
				))
			) : (
				<Text style={[globalStyles.titleText, { color: theme.text }]}>You have no holders. Click Add to create one.</Text>
			)}
		</View>
	);
}