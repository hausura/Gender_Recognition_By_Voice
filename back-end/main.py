import os
import pickle
from subprocess import run
import pandas as pd


def main():
    # sound_recorder.run()
    run(['Rscript', 'getAttributes.r',
        os.getcwd()])  # running R script for extracting data from recorded voice

    data = pd.read_csv('output/voiceDetails.csv')
    del data['peakf'], data['sound.files'], data['selec'], data['duration']
    dataset = pd.read_csv('voice.csv')
    dataset = dataset.iloc[:, :-1]
    data = (data - dataset.mean()) / (dataset.max() - dataset.min())  # scale

    trained_neural_net = pickle.load(open('trained_neural_net', 'rb'))  # load trained neural net from file

    return('Female' if trained_neural_net.predict(data)[0] == 0 else 'Male')  # print prediction
if __name__ == '__main__':
    print(main())

