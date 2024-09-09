
export default function TwoImagesRow() {
    return (
      <div className="flex space-x-4">
        <div className="flex-1">
          <img 
            src="/images/rectangle-1762@2x.png" 
            alt="Image 1" 
            className="w-full h-auto object-cover border rounded"
          />
        </div>
        <div className="flex-1">
          <img 
            src="images/rectangle-1763@2x.png" 
            alt="Image 2" 
            className="w-full h-auto object-cover border rounded"
          />
        </div>
      </div>
    );
  }
  