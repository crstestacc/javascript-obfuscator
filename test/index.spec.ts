import { BabelPolyfill } from './polyfills/BabelPolyfill';
import 'reflect-metadata';

require('source-map-support').install();
BabelPolyfill.append();

/**
 * Unit tests
 */
import './unit-tests/ObfuscationResult.spec';
import './unit-tests/options/OptionsNormalizer.spec';
import './unit-tests/SourceMapCorrector.spec';
import './unit-tests/cli/CLIUtils.spec';
import './unit-tests/decorators/Initializable.spec';
import './unit-tests/node/NodeAppender.spec';
import './unit-tests/node/NodeUtils.spec';
import './unit-tests/stack-trace-analyzer/StackTraceAnalyzer.spec';
import './unit-tests/utils/CryptUtils.spec';
import './unit-tests/utils/RandomGeneratorUtils.spec';
import './unit-tests/utils/Utils.spec';

/**
 * Functional tests
 */
import './functional-tests/JavaScriptObfuscator.spec';
import './functional-tests/JavaScriptObfuscatorCLI.spec';
import './functional-tests/JavaScriptObfuscatorInternal.spec';
import './functional-tests/custom-nodes/console-output-nodes/ConsoleOutputDisableExpressionNode.spec';
import './functional-tests/custom-nodes/domain-lock-nodes/DomainLockNode.spec';
import './functional-tests/custom-nodes/string-array-nodes/StringArrayCallsWrapper.spec';
import './functional-tests/custom-nodes/string-array-nodes/StringArrayRotateFunctionNode.spec';
import './functional-tests/custom-nodes/string-array-nodes/StringArrayNode.spec';
import './functional-tests/node-transformers/node-control-flow-transformers/FunctionControlFlowTransformer.spec';
import './functional-tests/node-transformers/node-control-flow-transformers/control-flow-replacers/BinaryExpressionControlFlowReplacer.spec';
import './functional-tests/node-transformers/node-control-flow-transformers/control-flow-replacers/CallExpressionControlFlowReplacer.spec';
import './functional-tests/node-transformers/node-control-flow-transformers/control-flow-replacers/LogicalExpressionControlFlowReplacer.spec';
import './functional-tests/node-transformers/node-obfuscators/CatchClauseObfuscator.spec';
import './functional-tests/node-transformers/node-obfuscators/FunctionDeclarationObfuscator.spec';
import './functional-tests/node-transformers/node-obfuscators/FunctionObfuscator.spec';
import './functional-tests/node-transformers/node-obfuscators/LabeledStatementObfuscator.spec';
import './functional-tests/node-transformers/node-obfuscators/LiteralObfuscator.spec';
import './functional-tests/node-transformers/node-obfuscators/MemberExpressionObfuscator.spec';
import './functional-tests/node-transformers/node-obfuscators/MethodDefinitionObfuscator.spec';
import './functional-tests/node-transformers/node-obfuscators/ObjectExpressionObfuscator.spec';
import './functional-tests/node-transformers/node-obfuscators/VariableDeclarationObfuscator.spec';
import './functional-tests/stack-trace-analyzer/StackTraceAnalyzer.spec';
import './functional-tests/templates/custom-nodes/domain-lock-nodes/DomainLockNodeTemplate.spec';
import './functional-tests/templates/custom-nodes/string-array-nodes/StringArrayCallsWrapperNodeTemplate.spec';

/**
 * Performance tests
 */
import './performance-tests/JavaScriptObfuscatorPerformance.spec';

/**
 * Runtime tests
 */
import './runtime-tests/JavaScriptObfuscatorRuntime.spec';
