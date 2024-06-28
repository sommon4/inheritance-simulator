import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Baby, Redo2 } from 'lucide-react';

const InheritanceSimulator = () => {
  const [children, setChildren] = useState([]);
  const [totalChildren, setTotalChildren] = useState(0);
  const [affectedChildren, setAffectedChildren] = useState(0);
  const [probability, setProbability] = useState(25);

  const simulateBirth = () => {
    const isAffected = Math.random() < (probability / 100);
    setChildren(prev => [...prev, isAffected]);
    setTotalChildren(prev => prev + 1);
    if (isAffected) {
      setAffectedChildren(prev => prev + 1);
    }
  };

  const reset = () => {
    setChildren([]);
    setTotalChildren(0);
    setAffectedChildren(0);
  };

  const handleProbabilityChange = (newValue) => {
    setProbability(newValue[0]);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Card className="mb-4">
        <CardHeader>
          <CardTitle className="text-4xl md:text-5xl font-bold text-center mb-6">Let's Have Babies!</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-8">
            <p className="text-center mb-4 text-xl md:text-2xl">Chance of baby needing extra love:</p>
            <Slider
              value={[probability]}
              onValueChange={handleProbabilityChange}
              max={100}
              step={1}
              className="mb-4"
            />
            <p className="text-center mt-2 text-2xl md:text-3xl font-bold">{probability}%</p>
          </div>
          <div className="flex justify-center mb-8">
            <Button onClick={simulateBirth} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-2xl md:text-3xl">
              <Baby className="mr-4" size={36} /> Have a Baby
            </Button>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-6 mb-8">
            {children.map((isAffected, index) => (
              <Baby 
                key={index} 
                size={72} 
                className={`${isAffected ? 'text-red-500' : 'text-green-500'}`}
              />
            ))}
          </div>
          <div className="text-center mb-8">
            <p className="text-2xl md:text-3xl mb-2">You have {totalChildren} babies!</p>
            <p className="text-xl md:text-2xl">{affectedChildren} need extra love ❤️</p>
          </div>
          <div className="flex justify-center">
            <Button onClick={reset} variant="outline" className="flex items-center text-xl md:text-2xl py-3 px-6">
              <Redo2 className="mr-4" size={24} /> Start Over
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="text-center p-6">
          <p className="text-xl md:text-2xl">Remember, each new baby has the same chance of needing extra love. It's like rolling a special dice each time!</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default InheritanceSimulator;