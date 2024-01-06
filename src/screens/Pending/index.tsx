import { StatusBar } from 'expo-status-bar';
import { Container, Scrool } from './styles';
import ResourceCard from '../../components/ResourceCard';
import theme from '../../styles/themes';
import ResourceCardsContainer from '../../components/ResourceCardsContainer';

export default function Pending() {
	return (
		<Container style={{ backgroundColor: theme.colors.primaryTransparent60 }}>
			<Scrool
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					gap: 16,
					paddingBottom: 32,
				}}
			>
				<ResourceCardsContainer />

				<Container>

				</Container>
			</Scrool>
		</Container>
	);
}
