import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { HelpCircle, MousePointer, Sliders, Play, RotateCcw } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export const TutorialDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <HelpCircle className="w-4 h-4" />
          How to Use PhET
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>PhET Simulation Tutorial</DialogTitle>
          <DialogDescription>
            Learn how to interact with PhET simulations effectively
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6">
            {/* Basic Controls */}
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <MousePointer className="w-5 h-5 text-primary" />
                Basic Controls
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="font-medium min-w-[100px]">Click & Drag:</span>
                  <span className="text-muted-foreground">Move objects, adjust positions, or pan the view</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-medium min-w-[100px]">Hover:</span>
                  <span className="text-muted-foreground">See tooltips and additional information</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-medium min-w-[100px]">Zoom:</span>
                  <span className="text-muted-foreground">Use mouse wheel or pinch gesture to zoom in/out</span>
                </li>
              </ul>
            </div>

            {/* Sliders and Controls */}
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Sliders className="w-5 h-5 text-secondary" />
                Sliders & Input Fields
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="font-medium min-w-[100px]">Sliders:</span>
                  <span className="text-muted-foreground">Drag to adjust values continuously</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-medium min-w-[100px]">Number Fields:</span>
                  <span className="text-muted-foreground">Click to type exact values</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-medium min-w-[100px]">Arrows:</span>
                  <span className="text-muted-foreground">Click arrows next to fields for fine adjustments</span>
                </li>
              </ul>
            </div>

            {/* Play Controls */}
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Play className="w-5 h-5 text-accent" />
                Playback Controls
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="font-medium min-w-[100px]">Play/Pause:</span>
                  <span className="text-muted-foreground">Start or stop the simulation animation</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-medium min-w-[100px]">Step:</span>
                  <span className="text-muted-foreground">Advance one frame at a time for detailed analysis</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-medium min-w-[100px]">Speed:</span>
                  <span className="text-muted-foreground">Adjust simulation speed (slow motion or fast forward)</span>
                </li>
              </ul>
            </div>

            {/* Reset */}
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-success" />
                Reset & Clear
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="font-medium min-w-[100px]">Reset All:</span>
                  <span className="text-muted-foreground">Return simulation to initial state</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-medium min-w-[100px]">Eraser/Clear:</span>
                  <span className="text-muted-foreground">Remove drawn paths or added objects</span>
                </li>
              </ul>
            </div>

            {/* Measurement Tools */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Measurement Tools</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="font-medium min-w-[100px]">Rulers:</span>
                  <span className="text-muted-foreground">Drag onto screen to measure distances</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-medium min-w-[100px]">Stopwatch:</span>
                  <span className="text-muted-foreground">Time events and measure periods</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-medium min-w-[100px]">Meters/Graphs:</span>
                  <span className="text-muted-foreground">Toggle displays to show values in real-time</span>
                </li>
              </ul>
            </div>

            {/* Tips */}
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Pro Tips</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Look for the question mark (?) icon in simulations for built-in help</li>
                <li>• Check different tabs at the top for various scenarios</li>
                <li>• Toggle checkboxes to show/hide vectors, grids, and measurements</li>
                <li>• Take your time to explore - there is no penalty for experimenting!</li>
                <li>• Read the question carefully and use the simulation to find the answer</li>
              </ul>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
