<Slider
        minimumValue={0}
        maximumValue={100}
        onValueChange={(valorSelecionado) => this.setState({valor: valorSelecionado})}
        value={this.state.valor}
        minimumTrackTintColor='green'
        maximumTrackTintColor='red'
        />
