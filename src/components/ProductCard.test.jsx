import { render, screen } from '@testing-library/react';
import ProductCard from '../ProductCard';

describe('ProductCard', () => {
	test('renders ProductCard component', () => {
		render(<ProductCard />);
		const productCardElement = screen.getByTestId('product-card');
		expect(productCardElement).toBeInTheDocument();
	});

	test('displays product title', () => {
		const product = { title: 'Test Product' };
		render(<ProductCard product={product} />);
		const titleElement = screen.getByText(/Test Product/i);
		expect(titleElement).toBeInTheDocument();
	});
});