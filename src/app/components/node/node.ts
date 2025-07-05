import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {FFlowModule} from '@foblex/flow';
import {Connector} from '../connector/connector';
import {INode} from '../../domain/i-node';

@Component({
  selector: 'node',
  imports: [FFlowModule, Connector],
  templateUrl: './node.html',
  styleUrl: './node.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Node {

  public data =  input.required<INode>();
}
