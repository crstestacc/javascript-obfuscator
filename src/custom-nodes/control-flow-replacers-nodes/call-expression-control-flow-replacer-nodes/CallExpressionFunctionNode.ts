import { injectable, inject } from 'inversify';
import { ServiceIdentifiers } from '../../../container/ServiceIdentifiers';

import * as ESTree from 'estree';

import { TStatement } from '../../../types/node/TStatement';

import { IOptions } from '../../../interfaces/options/IOptions';

import { initializable } from '../../../decorators/Initializable';

import { AbstractCustomNode } from '../../AbstractCustomNode';
import { Nodes } from '../../../node/Nodes';
import { RandomGeneratorUtils } from '../../../utils/RandomGeneratorUtils';

@injectable()
export class CallExpressionFunctionNode extends AbstractCustomNode {
    /**
     * @type {(ESTree.Expression | ESTree.SpreadElement)[]}
     */
    @initializable()
    private expressionArguments: (ESTree.Expression | ESTree.SpreadElement)[];

    /**
     * @param options
     */
    constructor (
        @inject(ServiceIdentifiers.IOptions) options: IOptions
    ) {
        super(options);
    }

    /**
     * @param expressionArguments
     */
    public initialize (expressionArguments: (ESTree.Expression | ESTree.SpreadElement)[]): void {
        this.expressionArguments = expressionArguments;
    }

    /**
     * @returns {TStatement[]}
     */
    protected getNodeStructure (): TStatement[] {
        const calleeIdentifier: ESTree.Identifier = Nodes.getIdentifierNode('callee');
        const params: ESTree.Identifier[] = [];
        const argumentsLength: number = this.expressionArguments.length;

        for (let i: number = 0; i < argumentsLength; i++) {
            params.push(Nodes.getIdentifierNode(`param${i + 1}`));
        }

        return [
            Nodes.getFunctionDeclarationNode(
                RandomGeneratorUtils.getRandomVariableName(1, true, false),
                [
                    calleeIdentifier,
                    ...params
                ],
                Nodes.getBlockStatementNode([
                    Nodes.getReturnStatementNode(
                        Nodes.getCallExpressionNode(
                            calleeIdentifier,
                            params
                        )
                    )
                ])
            )
        ];
    }
}
