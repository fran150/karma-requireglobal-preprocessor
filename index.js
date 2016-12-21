function createRequireGlobalQuarkPreprocessor() {
    return function(content, file, done) {
        var result = [
            'requireConfig = (function (require) { ',
            '',
            content,
            '    return require;',
            '})(requireConfig);'
        ];
        done(result.join('\n'));
    }
}

module.exports = {
    'preprocessor:requireglobalquark': ['factory', createRequireGlobalQuarkPreprocessor]
};
