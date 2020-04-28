export type IValuesProviderFunction<T extends any[]> = () => T[];
export type IValuesProvider<T extends any[]> = T[] | IValuesProviderFunction<T>;

/**
 * Implements the dataProvider pattern for Jasmine.
 * Derived from https://github.com/MortalFlesh/jasmine-data-provider.
 */
export default function<T extends any[]>(
	this: any,
	values: IValuesProvider<T>,
	description: string,
	func: (...data: T) => Promise<any> | void
): void {
	const unwrappedValues = values instanceof Function ? values() : values;
	unwrappedValues.forEach(value => {
		it(`${description} using values ${value.join(', ')}`, async () => {
			await func.apply(this, value);
		});
	});
}
