import Button from '../../components/ui/Button';

// Values are placeholders — connect a market data feed here later.


export default function StockPrice() {
  return (
    <div className="flex h-full flex-col bg-brand-gray px-6 py-8 md:px-[26px]">
      <h2 className="font-heading text-[26px] font-semibold uppercase text-brand-ink md:text-[30px]">
        Stock Price
      </h2>


      <div className="mt-auto flex justify-center pt-8">
        <Button to="/investors" variant="outline" className="min-w-[228px]">
          Visit investor relations
        </Button>
      </div>
    </div>
  );
}
