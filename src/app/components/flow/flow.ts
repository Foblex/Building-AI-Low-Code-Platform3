import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {FCreateConnectionEvent, FCreateNodeEvent, FFlowModule} from '@foblex/flow';
import {Node} from '../node/node';
import {FlowPalette} from '../flow-palette/flow-palette';
import {INode} from '../../domain/i-node';
import {IStorageNode} from '../../domain/i-storage-node';
import {generateGuid} from '../../utils/generate-guid';
import {IConnection} from '../../domain/i-connection';

@Component({
  selector: 'flow',
  imports: [FFlowModule, Node, FlowPalette],
  templateUrl: './flow.html',
  styleUrl: './flow.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Flow {

  protected nodes = signal<INode[]>([]);
  protected connections = signal<IConnection[]>([]);

  protected createNode(event: FCreateNodeEvent<IStorageNode>): void {
    this.nodes.update((nodes) => {
      const newNode: INode = {
        ...event.data,
        id: generateGuid(),
        position: event.rect || {x: 0, y: 0}
      };
      return [...nodes, newNode];
    });
  }

  protected createConnection(event: FCreateConnectionEvent): void {
    if (!event.fInputId) {
      return;
    }
    this.connections.update((connections) => {
      const newConnection: IConnection = {
        id: generateGuid(),
        from: event.fOutputId,
        to: event.fInputId!
      };
      return [...connections, newConnection];
    });
  }
}
